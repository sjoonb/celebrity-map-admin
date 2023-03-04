import { Table } from '@tanstack/react-table';
import { PropsOf } from '@emotion/react';
import { Table as TTable } from '../base/Table';
import { TableContext } from './ReactTable.Context';
import { ReactTableHeader } from './ReactTable.Header';
import { ReactTableBody } from './ReactTabe.Body';

export interface ReactTableProps extends PropsOf<typeof TTable> {
  table: Table<any>;
}

export const ReactTable = ({
  table,
  children,
  ...tableProps
}: ReactTableProps) => {
  return (
    <TableContext.Provider value={table}>
      <TTable {...tableProps}>{children}</TTable>
    </TableContext.Provider>
  );
};

ReactTable.Header = ReactTableHeader;
ReactTable.Body = ReactTableBody;
