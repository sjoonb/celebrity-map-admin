import { ActionIcon, Group, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { HiTrash } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { AiFillCopy } from 'react-icons/ai';
import { x } from '@xstyled/emotion';
import { MouseEvent, useCallback, useEffect } from 'react';
import { modalPromise } from '@/lib/components/modal/modal-promise';
import { RestaurantInfoPopup } from '@/lib/restaurant/RestaurantInfoPopup';
import { useAtom, useSetAtom } from 'jotai';
import { confirmPromise } from '@/lib/components/modal/confrim-promise';
import {
  RestaurantInfo,
  restaurantsInfoAtom,
  sortedRestaurantsInfoAtom,
} from '@/lib/restaurant/restaurantInfo';
import { v4 as uuid } from 'uuid';
import { channelIdMapping } from '@/lib/constant/channels';

export const RestaurantTable = () => {
  const  setRestaurantsInfo = useSetAtom(restaurantsInfoAtom);
  const [sortedRestaurantsInfo] = useAtom(sortedRestaurantsInfoAtom);

  useEffect(() => {
    console.log('한번만 불리길');
  }, []);

  const handleDuplicateData = useCallback((restaurantInfo: RestaurantInfo) => {
    confirmPromise('선택된 데이터를 복제합니다.', {
      labels: { confirm: '확인', cancel: '취소' },
      centered: true,
    }).then((isConfirmed) => {
      if (isConfirmed) {
        const index = sortedRestaurantsInfo.indexOf(restaurantInfo);
        const duplicatedInfo = Object.create(restaurantInfo);
        duplicatedInfo.id = uuid();
        setRestaurantsInfo((prev) => [
          ...prev.slice(0, index),
          duplicatedInfo,
          ...prev.slice(index),
        ]);
      }
    });
  }, []);

  const handleDeleteData = useCallback((restaurantInfo: RestaurantInfo) => {
    confirmPromise('선택된 데이터를 삭제합니다.', {
      labels: { confirm: '확인', cancel: '취소' },
      centered: true,
    }).then((isConfirmed) => {
      if (isConfirmed) {
        setRestaurantsInfo((prev) =>
          prev.filter((info) => info !== restaurantInfo)
        );
      }
    });
  }, []);

  const handleEditData = useCallback((restaurantInfo: RestaurantInfo) => {
    modalPromise<RestaurantInfo>(RestaurantInfoPopup, {
      id: 'edit-restaurant-data',
      title: '식당 데이터 수정',
      componentProps: { restaurantInfo: restaurantInfo },
    }).then((editedInfo) => {
      setRestaurantsInfo((prev) => {
        return prev.map((info) =>
          info.id !== editedInfo.id ? info : editedInfo
        );
      });
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
        { accessor: 'channelId', title: '채널 이름', render: (data) => <Text>{channelIdMapping.get(data.channelId)}</Text>},
        { accessor: 'restaurantName', title: '식당 이름' },
        {
          accessor: 'naverLink',
          title: '네이버 링크',
          render: (data) => renderLinkText(data.naverLink),
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
                  handleDeleteData(data);
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
