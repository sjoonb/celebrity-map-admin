import { yupResolver } from '@hookform/resolvers/yup';
import { authApi, useLoginMutation } from '@/lib/auth/authApi';
import { useAuthStore } from '@/lib/auth/AuthStore';
import { Flex } from '@/lib/components/atoms/Flex';
import {
  Button,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { x } from '@xstyled/emotion';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCallback, useEffect, useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { useDomLoaded } from '@/lib/utils/use-dom-loaded';

interface Form {
  username: string;
  password: string;
}

const schema = yup.object<Form>({
  password: yup.string().required(),
  username: yup.string().required(),
});

export const Login = () => {
  const { accessToken, setAcessToken } = useAuthStore();
  const { push } = useRouter();
  const domLoaded = useDomLoaded();
  const { isFetching, data } = useQuery(
    ['profile', accessToken],
    async () =>
      authApi.getProfile({
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    {
      enabled: !!accessToken && domLoaded,
      retry: false,
    }
  );

  useEffect(() => {
    if (!data?.userId) return;
    push('/restaurant');
  }, [data?.userId, push]);

  const { isLoading: isLoadingLogin, mutateAsync: login } = useLoginMutation();

  // useEffect(() => {
  //   if (isLoading || isError) {
  //     return;
  //   }
  //   router.push('/restaurant');
  // }, [isError, isLoading, router]);

  const onSubmit = useCallback(
    async ({ password, username }: Form) => {
      if (isLoadingLogin) return;
      const data = await login({
        username: username,
        password: password,
      });
      if (!data?.access_token) {
        return showNotification({
          color: 'red',
          message: '아이디 또는 비밀번호를 확인해주세요.',
          title: '로그인 실패',
        });
      }
      const access_token = data.access_token;
      setAcessToken(access_token);
    },
    [isLoadingLogin, login, setAcessToken]
  );

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  return (
    <x.div
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {isFetching ? (
        <LoadingOverlay visible />
      ) : (
        <Flex flexDirection="column" gap={2} minWidth={300}>
          <TextInput
            placeholder="ID"
            label="ID"
            size="lg"
            radius="lg"
            {...register('username')}
            error={errors.username?.message}
          />
          <PasswordInput
            placeholder="PASSWORD"
            label="Password"
            size="lg"
            radius="lg"
            {...register('password')}
            error={errors.password?.message}
          />
          <Button
            loading={isLoadingLogin}
            size="lg"
            my={20}
            py={8}
            radius="lg"
            onClick={handleSubmit(onSubmit)}
          >
            로그인
          </Button>
        </Flex>
      )}
    </x.div>
  );
};

export default Login;
