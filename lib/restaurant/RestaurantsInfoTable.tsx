import { ActionIcon, Group, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { HiTrash } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { AiFillCopy } from 'react-icons/ai';
import { x } from '@xstyled/emotion';
import { MouseEvent, useCallback, useEffect } from 'react';
import { modalPromise } from '@/lib/components/modal/modal-promise';
import { RestaurantInfoPopup } from './RestaurantInfoPopup';
import { useAtom, useSetAtom } from 'jotai';
import { confirmPromise } from '@/lib/components/modal/confrim-promise';
import {
  channelIdMapping,
  naverMapPlaceUrl,
  RestaurantInfo,
  restaurantsInfoReducer,
  sortedRestaurantsInfoAtom,
} from './restaurantInfo';

export const RestaurantTable = () => {
  const [sortedRestaurantsInfo] = useAtom(sortedRestaurantsInfoAtom);
  const dispatch = useSetAtom(restaurantsInfoReducer);

  useEffect(() => {
    const value = localStorage.getItem('serializedRestaurantsInfo');
    if (value) {
      dispatch({ type: 'deserialize' });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: 'serialize' });
  }, [sortedRestaurantsInfo]);

  const handleDuplicateData = useCallback((restaurantInfo: RestaurantInfo) => {
    confirmPromise('선택된 데이터를 복제합니다.').then((isConfirmed) => {
      if (isConfirmed) {
        const index = sortedRestaurantsInfo.indexOf(restaurantInfo);
        dispatch({ type: 'duplicate', restaurantInfo, index });
      }
    });
  }, []);

  const handleRemoveData = useCallback((restaurantInfo: RestaurantInfo) => {
    confirmPromise('선택된 데이터를 삭제합니다.').then((isConfirmed) => {
      if (isConfirmed) {
        dispatch({ type: 'remove', restaurantInfo });
      }
    });
  }, []);

  const handleEditData = useCallback((restaurantInfo: RestaurantInfo) => {
    modalPromise<RestaurantInfo>(RestaurantInfoPopup, {
      id: 'edit-restaurant-data',
      title: '식당 데이터 수정',
      componentProps: { restaurantInfo: restaurantInfo },
    }).then((editedInfo) => {
      dispatch({ type: 'edit', editedInfo });
    });
  }, []);

  return (
    <DataTable
      minHeight={sortedRestaurantsInfo.length === 0 ? 150 : undefined}
      withBorder
      withColumnBorders
      noRecordsText="No data to show"
      records={sortedRestaurantsInfo}
      columns={[
        {
          accessor: 'channelId',
          title: '채널 이름',
          render: (data) => <Text>{channelIdMapping.get(data.channelId)}</Text>,
        },
        { accessor: 'restaurantName', title: '식당 이름' },
        {
          accessor: 'naverId',
          title: '네이버 링크',
          render: (data) => renderLinkText(naverMapPlaceUrl + data.naverId),
        },
        {
          accessor: 'youtubeLink',
          title: '유튜브 링크',
          render: (data) => renderLinkText(data.youtubeLink),
        },
        {
          accessor: 'actions',
          title: <Text mr="xs">Row actions</Text>,
          textAlignment: 'right',
          render: (data) => (
            <Group spacing={4} position="right" noWrap>
              <ActionIcon
                color="gray"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleDuplicateData(data);
                }}
              >
                <AiFillCopy size={16} />
              </ActionIcon>
              <ActionIcon
                color="blue"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleEditData(data);
                }}
              >
                <MdEdit size={16} />
              </ActionIcon>
              <ActionIcon
                color="red"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleRemoveData(data);
                }}
              >
                <HiTrash size={16} />
              </ActionIcon>
            </Group>
          ),
        },
      ]}
      rowExpansion={{
        content: ({ record }) => (
          <x.div bg="background" p="3">
            <p>
              {record.videoStartMinute}분 {record.videoStartSecond}초
            </p>
            <p>{record.menus.toString()}</p>
            <p>{record.restaurantName}</p>
            <p>
              {record.latitude},{record.longitude}
            </p>
          </x.div>
        ),
      }}
    />
  );
};

const renderLinkText = (link: string) => {
  return (
    <Text
      color="blue"
      component="a"
      href={link}
      underline
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
      }}
    >
      {link}
    </Text>
  );
};
