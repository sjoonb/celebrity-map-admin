import { ActionIcon, FileInputProps, TextInput } from '@mantine/core';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';
import { PropsOf } from '@emotion/react';
import { Flex } from '@/lib/components/atoms/Flex';
import { FlexInput } from '@/lib/components/form/FlexInput';
import { HiMinusCircle } from 'react-icons/hi';

interface FlexAddibleInputProps extends FileInputProps {
  wrapperProps?: PropsOf<typeof Flex>;
  children?: React.ReactNode;
}

export const FlexAddibleInput = ({
  label,
  wrapperProps,
  children,
}: FlexAddibleInputProps) => {
  const [rows, setRows] = useState([] as string[]);

  const handleAddRow = useCallback(() => {
    setRows([...rows, '']);
  }, [rows, setRows]);

  const handleSubRow = useCallback(
    (index: number) => {
      rows.splice(index, 1);
      setRows([...rows]);
    },
    [rows, setRows]
  );

  return (
    <Flex flexDirection="column" gap={2}>
      <FlexInput label={label}>
        <Flex gap="20px" {...wrapperProps}>
          <TextInput sx={{ flexGrow: 1 }}></TextInput>
          <ActionIcon size="lg" color="primary" onClick={handleAddRow}>
            <MdOutlineLibraryAdd size={24} />
          </ActionIcon>
          {children}
        </Flex>
      </FlexInput>
      {Array.from({ length: rows.length }, (_, index) => (
        <FlexInput key={index} label="">
          <Flex gap="20px" {...wrapperProps}>
            <TextInput sx={{ flexGrow: 1 }}></TextInput>
            <ActionIcon
              size="lg"
              color="primary"
              onClick={() => handleSubRow(index)}
            >
              <HiMinusCircle size={24} color="red" />
            </ActionIcon>
            {children}
          </Flex>
        </FlexInput>
      ))}
    </Flex>
  );
};
