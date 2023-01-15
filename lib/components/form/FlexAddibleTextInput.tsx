import { ActionIcon, TextInput } from '@mantine/core';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';
import { PropsOf } from '@emotion/react';
import { Flex } from '../atoms/Flex';
import { FlexInput } from './FlexInput';
import { HiMinusCircle } from 'react-icons/hi';
import { UseFormReturnType } from '@mantine/form';

interface FlexAddibleTextInputProps {
  label: string;
  wrapperProps?: PropsOf<typeof Flex>;
  children?: React.ReactNode;
  form: UseFormReturnType<any>;
  fieldName: string;
}

export const FlexAddibleTextInput = ({
  label,
  wrapperProps,
  children,
  form,
  fieldName,
}: FlexAddibleTextInputProps) => {
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
          <TextInput sx={{ flexGrow: 1 }} {...form.getInputProps(fieldName)} />
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
