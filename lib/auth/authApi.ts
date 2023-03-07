import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { Configuration, AuthApi } from '../openapi';
import { useAuthStore } from './AuthStore';
import { useAuthQuery } from './use-auth-query';

export const authApi = new AuthApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_BASE_API_PATH })
);

export const useLoginMutation = () =>
  useMutation(
    async ({ username, password }: { username: string; password: string }) => {
      try {
        const data = await authApi.postLogin({
          authLoginDto: {
            username: username,
            password: password,
          },
        });
        return JSON.parse(data);
      } catch (err) {
        return null;
      }
    }
  );
