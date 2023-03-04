import { Flex } from '@/lib/components/atoms/Flex';
import { CreatableMultiSelect } from '@/lib/components/form/CreatableMultiSelect';
import { FlexInput } from '@/lib/components/form/FlexInput';
import { ModalChildProps } from '@/lib/components/modal/modal-promise';
import { urlRegExp, doubleRegExp, intRegExp } from '@/lib/constant/regexp';
import {
  channelIdMapping,
  RestaurantInfo as RestaurantInfo,
} from './restaurantInfo';
import { NaverPlaceRestaurantInfoQuery } from '@/lib/urql/urqlClient';
import {
  Button,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
} from '@mantine/core';
import { isNotEmpty, matches, useForm } from '@mantine/form';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'urql';
import { v4 as uuid } from 'uuid';

export interface RestaurantInfoPopupProps
  extends ModalChildProps<RestaurantInfo> {
  restaurantInfo?: RestaurantInfo;
}

export const selectChannelData: SelectItem[] = [];

channelIdMapping.forEach((value: string, key: string) => {
  selectChannelData.push({ value: key, label: value });
});

export const RestaurantInfoPopup = ({
  onDone,
  restaurantInfo,
}: RestaurantInfoPopupProps) => {
  const form = useForm<RestaurantInfo>({
    initialValues: {
      id: restaurantInfo?.id ?? uuid(),
      channelId: restaurantInfo?.channelId ?? '',
      youtubeLink: restaurantInfo?.youtubeLink ?? '',
      videoStartMinute: restaurantInfo?.videoStartMinute ?? 0,
      videoStartSecond: restaurantInfo?.videoStartSecond ?? 0,
      menus: restaurantInfo?.menus ?? [],
      naverId: restaurantInfo?.naverId ?? '',
      restaurantName: restaurantInfo?.restaurantName ?? '',
      phoneNumber: restaurantInfo?.phoneNumber ?? '',
      latitude: restaurantInfo?.latitude ?? '',
      longitude: restaurantInfo?.longitude ?? '',
    },

    validate: {
      channelId: isNotEmpty(),
      youtubeLink: isNotEmpty() && matches(urlRegExp),
      videoStartMinute: isNotEmpty(),
      videoStartSecond: isNotEmpty(),
      menus: isNotEmpty(),
      naverId: isNotEmpty() && matches(intRegExp),
      restaurantName: isNotEmpty(),
      phoneNumber: isNotEmpty(),
      latitude: isNotEmpty() && matches(doubleRegExp),
      longitude: isNotEmpty() && matches(doubleRegExp),
    },
  });

  const [fetchedRestaurantInfo, refetchRestaurantInfo] = useQuery({
    query: NaverPlaceRestaurantInfoQuery,
    variables: { id: form.values.naverId },
    pause: true,
  });

  const handleFetchDataFromNaverId = useCallback(() => {
    form.validateField('naverId');
    if (form.isValid('naverId')) {
      console.log('refetch!');
      refetchRestaurantInfo({ requestPolicy: 'network-only' });
    }
  }, [form.values.naverId]);

  useEffect(() => {
    if (!fetchedRestaurantInfo.data) {
      return;
    }

    try {
      const data = fetchedRestaurantInfo.data.business.base;

      form.setValues({
        restaurantName: data.name,
        phoneNumber:
          data.virtualPhone.length !== 0 ? data.virtualPhone : data.phone,
        latitude: data.coordinate.y.toString(),
        longitude: data.coordinate.x.toString(),
      });
    } catch {
      form.setFieldError('naverId', '해당 ID의 식당이 존재하지 않습니다.');
    }
  }, [fetchedRestaurantInfo.data]);

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onDone(values);
      })}
    >
      <Flex flexDirection="column" gap={4}>
        <FlexInput label="채널 이름">
          <Select
            data={selectChannelData}
            {...form.getInputProps('channelId')}
          />
        </FlexInput>
        <FlexInput label="유튜브 링크">
          <TextInput {...form.getInputProps('youtubeLink')} />
        </FlexInput>
        <FlexInput label="영상 시작시간">
          <Flex gap="20px">
            <NumberInput
              placeholder="분"
              sx={{ flexGrow: 1 }}
              min={0}
              max={59}
              {...form.getInputProps('videoStartMinute')}
            />
            <NumberInput
              placeholder="초"
              sx={{ flexGrow: 1 }}
              min={0}
              max={59}
              {...form.getInputProps('videoStartSecond')}
            />
          </Flex>
        </FlexInput>
        <FlexInput label="영상에 나온 메뉴">
          <CreatableMultiSelect
            placeholder="직접 메뉴를 입력해주세요"
            formProps={{ form, fieldName: 'menus' }}
          />
        </FlexInput>
        <FlexInput label="네이버 식당 ID">
          <Flex gap="20px">
            <TextInput
              sx={{ flexGrow: 1 }}
              {...form.getInputProps('naverId')}
            />
            <Button
              variant="light"
              onClick={handleFetchDataFromNaverId}
              loading={fetchedRestaurantInfo.fetching}
              loaderPosition="center"
            >
              불러오기
            </Button>
          </Flex>
        </FlexInput>
        <FlexInput label="식당 이름">
          <TextInput {...form.getInputProps('restaurantName')} />
        </FlexInput>
        <FlexInput label="식당 전화번호">
          <TextInput {...form.getInputProps('phoneNumber')} />
        </FlexInput>
        <FlexInput label="식당 위치 정보">
          <Flex justifyContent="space-between" gap="20px">
            <TextInput
              placeholder="위도"
              sx={{ flexGrow: 1 }}
              {...form.getInputProps('latitude')}
            />
            <TextInput
              placeholder="경도"
              sx={{ flexGrow: 1 }}
              {...form.getInputProps('longitude')}
            />
          </Flex>
        </FlexInput>
        <Flex justifyContent="flex-end" mt="20px">
          <Button type="submit">완료</Button>
        </Flex>
      </Flex>
    </form>
  );
};
