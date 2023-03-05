import { Button, Flex, TextInput } from '@mantine/core';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { searchTextAtom } from './search-atom';

export const SearchTextInput = () => {
  const [value, setValue] = useState('');
  const setSearchText = useSetAtom(searchTextAtom);

  return (
    <Flex>
      <TextInput
        mr="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button variant="light" onClick={() => setSearchText(value)}>
        검색
      </Button>
    </Flex>
  );
};
