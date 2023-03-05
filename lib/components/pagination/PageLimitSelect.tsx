// import { pagingAtom } from '@joy-front/util';
import { Select, SelectItem, SelectProps } from '@mantine/core';
import { useAtom } from 'jotai';
import { pagingAtom } from './paging-atom';
// import { isNil } from 'ramda';
interface PageLimitSelectProps extends Partial<SelectProps> {
  scope?: symbol;
}

const limitOps = [5, 10, 20, 30, 40, 50].map((v) => ({
  label: `${v}개씩 보기`,
  value: v,
})) as unknown as SelectItem[];

export const PageLimitSelect = ({
  scope,
  data,
  ...props
}: PageLimitSelectProps) => {
  const [{ limit }, setPage] = useAtom(pagingAtom, scope);

  return (
    <Select
      radius="md"
      value={limit as any}
      data={data ?? limitOps}
      onChange={(v) => {
        console.log('setted: ', v);
        setPage((p) => ({ ...p, limit: v as any, page: 1 }));
      }}
      {...props}
    />
  );
};
