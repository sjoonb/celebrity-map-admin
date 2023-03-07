import { PropsOf } from '@emotion/react';
import { LoadingOverlay } from '@mantine/core';
import { x } from '@xstyled/emotion';
import { useProfileQuery } from '../auth/use-profile-query';

export const AdminContent = ({ children, ...props }: PropsOf<typeof x.div>) => {
  const { isLoading, isError } = useProfileQuery();

  return (
    <x.div
      bg="#FAFAFA"
      py="48px"
      px="80px"
      minH="calc(100vh - 100px)"
      {...props}
    >
      {isLoading || isError ? <LoadingOverlay visible /> : children}
    </x.div>
  );
};
