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
import { HiPlus } from 'react-icons/hi';
import { SimplePagination } from '../components/pagination/SimplePagination';
import { CelebrityEntity, RestaurantEntity } from '../openapi';
import { celebritiesApi } from './celebrityApi';
import { useCelebritiesColumns } from './use-celebrities-columns';

export const CelebrityPage = () => {
  const { data, isLoading, refetch } = useQuery(['celebrities'], async () =>
    celebritiesApi.getCelebrities()
  );

  const table = useReactTable<CelebrityEntity>({
    data: useMemo(() => data ?? [], [data]),
    getCoreRowModel: getCoreRowModel(),
    columns: useCelebritiesColumns(),
  });

  return (
    <x.div>
      <x.h1 mb={12}>유명인 관리</x.h1>
      <Flex mb="24px" justifyContent="flex-end" alignItems="center" gap={4}>
        <Flex gap={4}>
          <Button
            leftIcon={<HiPlus size={20} />}
            size="md"
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
