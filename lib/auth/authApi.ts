import { useMutation } from '@tanstack/react-query';
import { Configuration, AuthApi } from '../openapi';

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
