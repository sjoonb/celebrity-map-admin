import { StylesProps } from '@/lib/utils/styles-prop';
import { flexRender, Row } from '@tanstack/react-table';
import { Fragment } from 'react';
import { TBody } from '../base/TBody';
import { Td } from '../base/Td';
import { Tr } from '../base/Tr';
import { useTable } from './ReactTable.Context';

export type ReactTableBodyStyles = StylesProps<{
  tbody: typeof TBody;
  tr: typeof Tr;
  td: typeof Td;
}>;

export type BodyPreset = 'default';

type BodyPresetStyles = Record<BodyPreset, ReactTableBodyStyles>;
const bodyPresetStyles: BodyPresetStyles = {
  default: {},
};

export interface ReactTableBodyProps {
  styles?: ReactTableBodyStyles;
  preset?: BodyPreset;
  renderTop?: <T>(row: Row<T>) => void;
  renderBottom?: <T>(row: Row<T>) => void;
}

export const ReactTableBody = ({
  styles = {},
  renderBottom,
  renderTop,
  preset = 'default',
}: ReactTableBodyProps) => {
  const table = useTable();

  const baseStyles = bodyPresetStyles[preset];

  return (
    <TBody {...baseStyles.tbody} {...styles.tbody}>
      {table.getRowModel().rows.map((row) => (
        <Fragment key={row.id}>
          <>
            {renderTop?.(row)}
            <Tr {...baseStyles.tr} {...styles.tr} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td {...baseStyles.td} {...styles.td} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
            {renderBottom?.(row)}
          </>
        </Fragment>
      ))}
    </TBody>
  );
};
