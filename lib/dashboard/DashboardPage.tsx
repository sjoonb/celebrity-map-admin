import { CardBase } from '../components/atoms/CardBase';
import { Flex } from '../components/atoms/Flex';
import { modalPromise } from '../components/modal/modal-promise';
import { RestaurantInfoPopup } from '../restaurant/RestaurantInfoPopup';
import {
  RestaurantInfo,
  restaurantsInfoAtom,
} from '../restaurant/restaurantInfo';
import { RestaurantTable } from '../restaurant/RestaurantsInfoTable';
import { Button } from '@mantine/core';
import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import { confirmPromise } from '../components/modal/confrim-promise';
import { submitRestaurantsInfoAtom } from '../restaurant/restaurantsInfoAPI';

export const DashboardPage = () => {
  const setRestaurantsInfo = useSetAtom(restaurantsInfoAtom);
  const submitRestaurantsInfoToFireStoreDB = useSetAtom(submitRestaurantsInfoAtom);

  const handleAddData = useCallback(() => {
    modalPromise<RestaurantInfo>(RestaurantInfoPopup, {
      id: 'add-restaurant-data',
      title: '식당 데이터 추가',
    })
      .then((value) => {
        setRestaurantsInfo((prev) => [...prev, value]);
      })
      .catch((error) => {});
  }, []);

  const handleSubmitAllData = useCallback(() => {
    confirmPromise('모든 데이터를 제출합니다.', {
      labels: { confirm: '확인', cancel: '취소' },
      centered: true,
    })
      .then((isConfirmed) => {
        if (isConfirmed) {
          submitRestaurantsInfoToFireStoreDB();
        }
      })
      .catch((error) => {});
  }, [submitRestaurantsInfoAtom]);

  return (
    <CardBase p="40px" mb="30px">
      <Flex flexDirection="column" gap="40px">
        <RestaurantTable></RestaurantTable>
        <Flex gap="12px" justifyContent="flex-end">
          <Button leftIcon={<HiPlus size={20} />} onClick={handleAddData}>
            식당 데이터 추가
          </Button>
          <Button variant="outline" onClick={handleSubmitAllData}>제출</Button>
        </Flex>
      </Flex>
    </CardBase>
  );
};
