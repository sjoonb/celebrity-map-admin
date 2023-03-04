import { StylesProps } from '@/lib/utils/styles-prop';
import { flexRender } from '@tanstack/react-table';
import { TdHead } from '../base/Td';
import { THead } from '../base/THead';
import { TrHead } from '../base/Tr';
import { useTable } from './ReactTable.Context';

export type ReactTableHeaderStyles = StylesProps<{
  thead: typeof THead;
  tr: typeof TrHead;
  td: typeof TdHead;
}>;

export type HeaderPreset = 'default';

type HeaderPresetStyles = Record<HeaderPreset, ReactTableHeaderStyles>;
const headerPresetStyles: HeaderPresetStyles = {
  default: {},
};

export interface ReactTableHeaderProps {
  styles?: ReactTableHeaderStyles;
  preset?: HeaderPreset;
  Top?: React.ReactNode;
  Bottom?: React.ReactNode;
}

export const ReactTableHeader = ({
  preset = 'default',
  styles = {},
  Top,
  Bottom,
}: ReactTableHeaderProps) => {
  const table = useTable();

  const baseStyles = headerPresetStyles[preset];

  return (
    <THead {...baseStyles.thead} {...styles.thead}>
      {Top}
      {table.getHeaderGroups().map((hg) => (
        <TrHead {...baseStyles.tr} {...styles.tr} key={hg.id}>
          {hg.headers.map((h) => (
            <TdHead {...baseStyles.td} {...styles.td} key={h.id}>
              {h.isPlaceholder
                ? null
                : flexRender(h.column.columnDef.header, h.getContext())}
            </TdHead>
          ))}
        </TrHead>
      ))}
      {Bottom}
    </THead>
  );
};
