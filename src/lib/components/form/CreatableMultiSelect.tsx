import { PropsOf } from '@emotion/react';
import { MultiSelect } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useState } from 'react';
import { x } from '@xstyled/emotion';

interface FormProps {
  form: UseFormReturnType<any>;
  fieldName: string;
}

interface CreatableMultiSelectInputProps
  extends React.RefAttributes<HTMLInputElement> {
  formProps?: FormProps;
  placeholder?: string;
}

export const CreatableMultiSelect = ({
  formProps,
  placeholder,
}: CreatableMultiSelectInputProps) => {
  const [data, setData] = useState(
    formProps?.form.getInputProps(formProps?.fieldName).value as string[]
  );

  return (
    <MultiSelect
      placeholder={placeholder}
      data={data}
      searchable
      creatable
      getCreateLabel={(query) => `+ 메뉴추가 ${query}`}
      onCreate={(item) => {
        setData((current) => [...current, item]);
        return item;
      }}
      {...formProps?.form.getInputProps(formProps?.fieldName)}
    />
  );
};
