import { Flex } from '@/lib/components/atoms/Flex';
import { FlexAddibleInput } from '@/lib/components/form/FlexAddibleInput';
import { FlexInput } from '@/lib/components/form/FlexInput';
import { Button, NumberInput, Select, TextInput } from '@mantine/core';
import React from 'react';

const RestaurantPopup = () => {
  return (
    <Flex flexDirection="column" gap={4}>
      <FlexInput label="채널 이름">
        <Select
          data={[
            { value: 'poongja', label: '재밌는 거 올라온다' },
            { value: 'sungsikyung', label: '성시경의 먹을텐데' },
          ]}
        />
      </FlexInput>
      <FlexInput label="유튜브 링크">
        <TextInput />
      </FlexInput>
      <FlexInput label="영상 시작시간">
        <Flex gap="20px">
          <NumberInput placeholder="분" sx={{ flexGrow: 1 }} />
          <NumberInput placeholder="초" sx={{ flexGrow: 1 }} />
        </Flex>
      </FlexInput>
      <FlexAddibleInput label="영상에 나온 메뉴"></FlexAddibleInput>
      <FlexInput label="네이버 링크">
        <Flex gap="20px">
          <TextInput sx={{ flexGrow: 1 }} />
          <Button variant="light">불러오기</Button>
        </Flex>
      </FlexInput>
      <FlexInput label="식당 이름">
        <TextInput />
      </FlexInput>
      <FlexInput label="식당 전화번호">
        <TextInput />
      </FlexInput>
      <FlexInput label="식당 이름">
        <TextInput />
      </FlexInput>
      <FlexInput label="식당 위치 정보">
        <Flex justifyContent="space-between" gap="20px">
          <TextInput placeholder="위도" sx={{ flexGrow: 1 }} />
          <TextInput placeholder="경도" sx={{ flexGrow: 1 }} />
        </Flex>
      </FlexInput>
      <Flex justifyContent="flex-end" mt="20px">
        <Button>완료</Button>
      </Flex>
    </Flex>
  );
};

export const AddRestaurantPopup = () => {
  return <RestaurantPopup></RestaurantPopup>;
};

export const EditRestaurantPopup = () => {
  return <RestaurantPopup></RestaurantPopup>;
};
