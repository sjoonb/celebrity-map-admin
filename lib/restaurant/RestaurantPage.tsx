import { CardBase } from '@/lib/components/atoms/CardBase';
import { Flex } from '@/lib/components/atoms/Flex';
import { ReactTable } from '@/lib/components/table/render/ReactTable';
import { useRestaurantListColumns } from '@/lib/restaurant/use-restaurant-list-columns';
import { Button, Center, Loader, Select, Text, TextInput } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { x } from '@xstyled/emotion';
import { useAtomValue } from 'jotai';
import { useMemo, useState } from 'react';
import { useCelebrity } from '../celebrity/celebrityApi';
import { FlexInput } from '../components/form/FlexInput';
import { PageLimitSelect } from '../components/pagination/PageLimitSelect';
import {
  usePagingQueryValue,
  useSyncTotalCnt,
} from '../components/pagination/paging-atom';
import { SimplePagination } from '../components/pagination/SimplePagination';
import { searchTextAtom } from '../components/search/search-atom';
import { SearchTextInput } from '../components/search/SearchTextInput';
import { RestaurantEntity } from '../openapi';
import { restaurantsApi } from './restaurantsApi';

export const RestaurantPage = () => {
  const { celebrities, celebrityId, setCelebrityId } = useCelebrity();
  const searchText = useAtomValue(searchTextAtom);
  const { limit, page } = usePagingQueryValue();
  const { data, isLoading, refetch } = useQuery(
    ['restaurants', limit, page, celebrityId, searchText],
    async () =>
      restaurantsApi.getRestaurants({
        limit,
        page,
        celebrityId:
          celebrityId !== undefined && !isNaN(+celebrityId)
            ? +celebrityId
            : undefined,
        restaurantName: searchText.length !== 0 ? searchText : undefined,
      })
  );
  useSyncTotalCnt(data?.count ?? 0);

  const table = useReactTable<RestaurantEntity>({
    data: useMemo(() => data?.restaurants ?? [], [data]),
    getCoreRowModel: getCoreRowModel(),
    columns: useRestaurantListColumns(),
  });

  return (
    <x.div>
      <x.h1 mb={12}>식당관리</x.h1>
      <Flex
        mb="24px"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Flex alignItems="center">
          <x.p mr="24px">채널명</x.p>
          <Select
            value={celebrityId}
            onChange={(v) => v !== null && setCelebrityId(v)}
            data={celebrities}
          />
          <x.p mx="24px">식당이름 </x.p>
          <SearchTextInput />
        </Flex>
        <Flex gap={4}>
          <PageLimitSelect />
          <Button
            size="sm"
            onClick={() => {
              // modalPromise(AddFaqModal, {
              //   id: 'add-faq-modal',
              //   size: 725,
              //   title: <OfficeModalHeader title="FAQ 등록" />,
              //   onDone: () => refetch({ requestPolicy: 'network-only' }),
              // });
            }}
          >
            등록
          </Button>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" gap={4}>
        <CardBase py="50px" px="30px" mb="70px">
          {data && (
            <ReactTable table={table}>
              <ReactTable.Header />
              <ReactTable.Body />
            </ReactTable>
          )}
          {isLoading && (
            <Center>
              <Loader />
            </Center>
          )}
        </CardBase>
      </Flex>
      <Flex justifyContent="center">
        <SimplePagination />
      </Flex>
    </x.div>
  );
};

// TODO: - restaurants 받아올 때, total count 도 받아와야 페이지네이션 제대로 구현할 수 있다.
