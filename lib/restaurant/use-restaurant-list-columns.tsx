import { CellContext, createColumnHelper } from '@tanstack/react-table';
import { useCallback } from 'react';
import { buttonCell } from '@/lib/components/table/cell/button-cell';
import { RestaurantEntity } from '../openapi';

const h = createColumnHelper<RestaurantEntity>();

export const useRestaurantListColumns = () => {
  const handleOpenDetail = useCallback(
    (_: any, { row }: CellContext<any, any>) => {},
    []
  );

  return [
    // h.display(tableCheckbox),
    h.display({ header: 'No.', cell: (ctx) => ctx.row.index + 1 }),
    h.accessor('celebrity.channelName', { header: '채널 이름' }),
    h.accessor('restaurantName', { header: '식당 이름' }),
    h.accessor('youtubeVideoUrl', { header: '유튜브 링크' }),
    h.accessor('externalMapLink.value', { header: '네이버 링크' }),
    h.display({
      header: '상세보기',
      cell: buttonCell('상세보기', { onClick: handleOpenDetail }),
    }),
  ];
};
