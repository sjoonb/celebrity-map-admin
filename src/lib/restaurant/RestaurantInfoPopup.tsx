import { Flex } from '@/lib/components/atoms/Flex';
import { CreatableMultiSelect } from '@/lib/components/form/CreatableMultiSelect';
import { FlexInput } from '@/lib/components/form/FlexInput';
import { ModalChildProps } from '@/lib/components/modal/modal-promise';
import { channelIdMapping } from '@/lib/constant/channels';
import { urlRegExp, doubleRegExp } from '@/lib/constant/regexp';
import { RestaurantInfo as RestaurantInfo } from '@/lib/restaurant/restaurantInfo';
import {
  Button,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
} from '@mantine/core';
import { isNotEmpty, matches, useForm, zodResolver } from '@mantine/form';
import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export interface RestaurantInfoPopupProps
  extends ModalChildProps<RestaurantInfo> {
  restaurantInfo?: RestaurantInfo;
}

export const selectChannelData: SelectItem[] = [];

channelIdMapping.forEach((value: string, key: string) => {
  selectChannelData.push({value: key, label: value});
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
      videoStartMinute: restaurantInfo?.videoStartMinute ?? null,
      videoStartSecond: restaurantInfo?.videoStartSecond ?? null,
      menus: restaurantInfo?.menus ?? [],
      naverLink: restaurantInfo?.naverLink ?? '',
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
      naverLink: isNotEmpty() && matches(urlRegExp),
      restaurantName: isNotEmpty(),
      phoneNumber: isNotEmpty(),
      latitude: isNotEmpty() && matches(doubleRegExp),
      longitude: isNotEmpty() && matches(doubleRegExp),
    },
  });


  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onDone(values);
      })}
    >
      <Flex flexDirection="column" gap={4}>
        <FlexInput label="채널 이름">
          <Select
            data = {selectChannelData}
            // data={[
            //   { value: 'poongja', label: '또간집' },
            //   { value: 'sungsikyung', label: '성시경의 먹을텐데' },
            // ]}
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
        <FlexInput label="네이버 링크">
          <Flex gap="20px">
            <TextInput
              sx={{ flexGrow: 1 }}
              {...form.getInputProps('naverLink')}
            />
            <Button variant="light" onClick={
              () => {
                form.validateField('naverLink');
              }
            }>불러오기</Button>
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
