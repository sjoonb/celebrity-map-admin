import { CardBase } from '@/lib/components/atoms/CardBase';
import { Flex } from '@/lib/components/atoms/Flex';
import { ReactTable } from '@/lib/components/table/render/ReactTable';
import { useRestaurantListColumns } from '@/lib/restaurant/use-restaurant-list-columns';
import { Center, Loader, LoadingOverlay, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { x } from '@xstyled/emotion';
import { useMemo, useState } from 'react';
import { RestaurantEntity } from '../openapi';
import { restaurantsApi } from './restaurantsApi';

export const RestaurantListPage = () => {
  const { data, isLoading, refetch } = useQuery(['restaurants'], async () =>
    restaurantsApi.getRestaurants({ limit: 5 })
  );

  const table = useReactTable<RestaurantEntity>({
    data: useMemo(() => data ?? [], [data]),
    getCoreRowModel: getCoreRowModel(),
    columns: useRestaurantListColumns(),
  });

  return (
    <x.div>
      <x.h1>식당관리</x.h1>
      <Flex mb="52px" justifyContent="flex-end" gap={4}>
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
    </x.div>
  );
};
