import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { InitOverrideFunction } from '../openapi';
import { useAuthStore } from './AuthStore';

export function useAuthQuery<T>(
  queryKey: any,
  queryFn: (authHeader: { Authorization: string }) => Promise<T>,
  options = {} as any
) {
  const { push } = useRouter();
  const { accessToken, setAcessToken } = useAuthStore();

  const query = useQuery(
    queryKey,
    () => queryFn({ Authorization: `Bearer ${accessToken}` }),
    options
  );

  useEffect(() => {
    if (query.isError) {
      setAcessToken(null);
      push('/login');
    }
  }, [push, query.isError, setAcessToken]);

  return query;
}

// function useAuthMutation(mutationFn, options = {}) {
//   const queryClient = useQueryClient();
//   const authToken = 'your-auth-token-here';

//   // Add authorization header to options.headers
//   options.headers = {
//     ...options.headers,
//     Authorization: `Bearer ${authToken}`,
//   };

//   // Use the standard useMutation hook with the modified options
//   return useMutation(mutationFn, options);
// }
