import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LoadingOverlay } from '@mantine/core';

export default function Home() {
  const { isReady, push } = useRouter();

  useEffect(() => {
    if (!isReady) return;

    push('/dashboard');
  }, [isReady]);

  return <LoadingOverlay visible />;
}
