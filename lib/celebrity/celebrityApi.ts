import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { Configuration, CelebritiesApi } from '../openapi';

export const celebritiesApi = new CelebritiesApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_BASE_API_PATH })
);

export const useCelebrity = () => {
  const { data } = useQuery(['celebrities'], async () =>
    celebritiesApi.getCelebrities()
  );

  const [celebrityId, setCelebrityId] = useState('all');

  const celebrities = useMemo(
    () =>
      data
        ? [{ label: '전체', value: 'all' }].concat(
            (Object.values(data).map((item: any) => ({
              label: item.channelName,
              value: item.id,
            })) ?? []) as any
          )
        : [],
    [data]
  );
  return { celebrities, celebrityId, setCelebrityId };
};
