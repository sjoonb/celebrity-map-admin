import { CellContext, createColumnHelper } from '@tanstack/react-table';
import { useCallback } from 'react';
import { buttonCell } from '@/lib/components/table/cell/button-cell';
import { CelebrityEntity, RestaurantEntity } from '../openapi';
import dayjs from 'dayjs';
import { Image } from '@mantine/core';

const h = createColumnHelper<CelebrityEntity>();

export const useCelebritiesColumns = () => {
  const handleOpenDetail = useCallback(
    (_: any, { row }: CellContext<any, any>) => {},
    []
  );

  return [
    h.display({ header: 'No.', cell: (ctx) => ctx.row.index + 1 }),
    h.accessor('celebrityName', { header: '유명인' }),
    h.accessor('channelName', { header: '채널명' }),
    h.accessor('profileImage', {
      header: '프로필 이미지',
      cell: ({ getValue }) => (
        <Image
          width={60}
          height={70}
          src={getValue()}
          alt={'makrer off image'}
        />
      ),
    }),
    h.accessor('markerOnImage', {
      header: '마커 활성 이미지',
      cell: ({ getValue }) => (
        <Image
          width={60}
          height={70}
          src={getValue()}
          alt={'makrer off image'}
        />
      ),
    }),
    h.accessor('markerOffImage', {
      header: '마커 비활성 이미지',
      cell: ({ getValue }) => (
        <Image
          width={60}
          height={70}
          src={getValue()}
          alt={'makrer off image'}
        />
      ),
    }),
    h.display({
      header: '상세보기',
      cell: buttonCell('상세보기', { onClick: handleOpenDetail }),
    }),
  ];
};
