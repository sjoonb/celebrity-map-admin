import { ActionIcon, Group, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { HiTrash } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { x } from '@xstyled/emotion';
import { MouseEvent, useCallback } from 'react';
import { modalPromise } from '@/lib/components/modal/modal-promise';
import { EditRestaurantPopup } from '@/lib/dashboard/popups';
import { openConfirmModal } from '@mantine/modals';

export const RestaurantTable = () => {
  const handleDeleteData = useCallback(() => {
    openConfirmModal({
      title: '선택한 데이터를 삭제합니다.',
      labels: { confirm: '확인', cancel: '취소' },
      centered: true,
    });
  }, []);

  const handleEditData = useCallback(() => {
    modalPromise({
      modalId: 'edit-restaurant-data',
      title: '식당 데이터 수정하기',
      children: <EditRestaurantPopup />,
    });
  }, []);

  return (
    <DataTable
      // minHeight={150} // if only empty
      withBorder
      withColumnBorders
      noRecordsText="No data to show"
      records={[
        {
          id: 1,
          channelName: '재밌는 거 올라온다',
          restaurantName: 1942,
          naverLink: 'https://~https://~https://~',
          youtubeLink: 'https://~https://~https://~',
        },
        {
          id: 2,
          channelName: '성시경의 먹을텐데',
          restaurantName: 1942,
          naverLink: 'https://~https://~https://~',
          youtubeLink: 'https://~https://~https://~',
        },
      ]}
      columns={[
        { accessor: 'channelName', title: '채널 이름' },
        { accessor: 'restaurantName', title: '식당 이름' },
        { accessor: 'naverLink', title: '네이버 링크' },
        { accessor: 'youtubeLink', title: '유튜브 링크' },
        {
          accessor: 'actions',
          title: <Text mr="xs">Row actions</Text>,
          textAlignment: 'right',
          render: (company) => (
            <Group spacing={4} position="right" noWrap>
              <ActionIcon
                color="blue"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleEditData();
                }}
              >
                <MdEdit size={16} />
              </ActionIcon>
              <ActionIcon
                color="red"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleDeleteData();
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
            <Text>영상 시작시간</Text>
            <Text>영상에 나온 메뉴</Text>
            <Text>식당 이름</Text>
            <Text>식당 위치 정보</Text>
          </x.div>
        ),
      }}
    />
  );
};
