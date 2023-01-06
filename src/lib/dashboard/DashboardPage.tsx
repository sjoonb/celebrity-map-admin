import { CardBase } from '@/lib/components/atoms/CardBase';
import { Flex } from '@/lib/components/atoms/Flex';
import { modalPromise } from '@/lib/components/modal/modal-promise';
import { AddRestaurantPopup } from '@/lib/dashboard/popups';
import { RestaurantTable } from '@/lib/dashboard/RestaurantTable';
import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { HiPlus } from 'react-icons/hi';

export const DashboardPage = () => {
  const handleAddData = useCallback(() => {
    modalPromise({
      modalId: 'add-restaurant-data',
      title: '식당 데이터 추가하기',
      children: <AddRestaurantPopup />,
    });
  }, []);

  return (
    <CardBase p="40px" mb="30px">
      <Flex flexDirection="column" gap="40px">
        <RestaurantTable></RestaurantTable>
        <Flex gap="12px" justifyContent="flex-end">
          <Button leftIcon={<HiPlus size={20} />} onClick={handleAddData}>
            식당 데이터 추가
          </Button>
          <Button variant="outline">제출</Button>
        </Flex>
      </Flex>
    </CardBase>
  );
};
