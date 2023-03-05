import { atom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { isNil } from 'ramda';

export interface PagingAtom {
  page: number;
  limit: number;
  totalCount: number;
}

export const pagingAtom = atom<PagingAtom>({
  page: 1,
  limit: 10,
  totalCount: 0,
});

export const setPageAtom = atom(null, (_, set, page: number) => {
  set(pagingAtom, (prev) => ({ ...prev, page }));
});

export const useSetPage = (scope?: symbol) => useSetAtom(setPageAtom, scope);

export const usePagingValue = (scope?: any) => useAtomValue(pagingAtom, scope);

export const usePagingQueryValue = (scope?: any) =>
  useAtomValue(pagingAtom, scope);

export const useSyncTotalCnt = (
  totalCnt: number | null | undefined,
  scope?: any
) => {
  const setPaging = useSetAtom(pagingAtom, scope);
  useEffect(() => {
    if (isNil(totalCnt)) return;
    setPaging((prev) => ({ ...prev, totalCount: totalCnt }));
  }, [totalCnt, setPaging]);
};
