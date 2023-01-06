import { Flex } from '@/lib/components/atoms/Flex';
import { PropsOf } from '@emotion/react';
import { x } from '@xstyled/emotion';

export interface FlexInputProps extends PropsOf<typeof x.div> {
  label: React.ReactNode | string;
  labelWidth?: string | number;
}

export const FlexInput = ({
  label,
  children,
  labelWidth = '110px',
  alignItems = 'center',
}: FlexInputProps) => {
  return (
    <Flex alignItems={alignItems} gap={4}>
      <x.div
        text="button-05-b"
        color="#636363"
        flexBasis={labelWidth}
        minWidth={labelWidth}
        textOverflow="clip"
      >
        {label}
      </x.div>
      <x.div flexGrow={1}>{children}</x.div>
    </Flex>
  );
};
