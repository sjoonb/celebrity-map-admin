import { CardBase } from '@/lib/components/atoms/CardBase';
import { Flex } from '@/lib/components/atoms/Flex';
import { modalPromise } from '@/lib/components/modal/modal-promise';
import { RestaurantInfoPopup } from '@/lib/restaurant/RestaurantInfoPopup';
import {
  RestaurantInfo,
  restaurantsInfoReducer,
} from '@/lib/restaurant/restaurantInfo';
import { RestaurantTable } from '@/lib/restaurant/RestaurantsInfoTable';
import { Button } from '@mantine/core';
import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import { confirmPromise } from '@/lib/components/modal/confrim-promise';

export const DashboardPage = () => {
  const dispatch = useSetAtom(restaurantsInfoReducer);

  const handleAddData = useCallback(() => {
    modalPromise<RestaurantInfo>(RestaurantInfoPopup, {
      id: 'add-restaurant-data',
      title: '식당 데이터 추가',
    })
      .then((restaurantInfo) => {
        dispatch({ type: 'add', restaurantInfo });
      })
      .catch((error) => {});
  }, []);

  const handleSubmitAllData = useCallback(() => {
    confirmPromise('모든 데이터를 제출합니다.')
      .then((isConfirmed) => {
        if (isConfirmed) {
          dispatch({ type: 'submit' });
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <CardBase p="40px" mb="30px">
      <Flex flexDirection="column" gap="40px">
        <RestaurantTable></RestaurantTable>
        <Flex gap="12px" justifyContent="flex-end">
          <Button leftIcon={<HiPlus size={20} />} onClick={handleAddData}>
            식당 데이터 추가
          </Button>
          <Button variant="outline" onClick={handleSubmitAllData}>
            제출
          </Button>
        </Flex>
      </Flex>
    </CardBase>
  );
};
