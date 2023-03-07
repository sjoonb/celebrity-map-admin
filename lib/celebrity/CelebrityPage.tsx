import { CardBase } from '@/lib/components/atoms/CardBase';
import { Flex } from '@/lib/components/atoms/Flex';
import { ReactTable } from '@/lib/components/table/render/ReactTable';
import { Button, Center, Loader } from '@mantine/core';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { x } from '@xstyled/emotion';
import { useMemo } from 'react';
import { HiPlus } from 'react-icons/hi';
import { SimplePagination } from '../components/pagination/SimplePagination';
import { CelebrityEntity } from '../openapi';
import { useCelebrityQuery } from './celebrityApi';
import { useCelebritiesColumns } from './use-celebrities-columns';

export const CelebrityPage = () => {
  const { data, isLoading, refetch } = useCelebrityQuery();

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
