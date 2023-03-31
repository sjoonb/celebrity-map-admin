// import { useAuthStore } from '@/lib/auth/authStore';
// import { showToastMessage } from '@/lib/components';
import { LoadingOverlay } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const ProtectedRoute = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  //   const auth = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // if (!router.isReady) return;

    // if (!auth.apiToken || !auth.userId) {
    //   router.push('/login');
    //   showToastMessage('로그인 후 접근 가능한 페이지입니다.');
    //   return;
    // }

    setLoading(false);
  }, [router.isReady, router]);

  if (loading) {
    return <LoadingOverlay visible />;
  }

  return children;
};
