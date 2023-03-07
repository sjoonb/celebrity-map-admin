import { authApi } from './authApi';
import { useAuthQuery } from './use-auth-query';

export const useProfileQuery = () =>
  useAuthQuery(
    ['profile'],
    async (authHeader) =>
      authApi.getProfile({
        headers: {
          ...authHeader,
        },
      }),
    {
      retry: false,
    }
  );
