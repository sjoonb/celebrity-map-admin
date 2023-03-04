import { Table } from '@tanstack/react-table';
import { createContext, useContext } from 'react';

export const TableContext = createContext<Table<unknown>>(null as any);

export const useTable = () => useContext(TableContext);
