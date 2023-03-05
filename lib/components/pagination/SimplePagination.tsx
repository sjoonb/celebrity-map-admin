import { Pagination, PaginationProps } from '@mantine/core';
import { useMemo } from 'react';
import { usePagingValue, useSetPage } from './paging-atom';

export interface SimplePaginationProps extends Partial<PaginationProps> {
  scope?: symbol;
}

export const SimplePagination = ({
  scope,
  ...props
}: SimplePaginationProps) => {
  const { page, totalCount, limit } = usePagingValue();
  const setPage = useSetPage();
  const totalPage = useMemo(
    () => Math.ceil(totalCount / limit),
    [totalCount, limit]
  );
  return (
    <Pagination
      page={Math.min(page, totalPage)}
      onChange={setPage}
      total={totalPage}
      {...props}
    />
  );
};
