import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
