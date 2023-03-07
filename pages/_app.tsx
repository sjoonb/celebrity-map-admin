// import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '../lib/theme/xstyled.theme';
import { AdminLayout } from '../lib/layout/AdminLayout';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Provider as JotaiProvider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BaseAPI, Configuration } from '@/lib/openapi';
import { useRouter } from 'next/router';
import { NotificationsProvider } from '@mantine/notifications';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const Layout = router.pathname === '/login' ? (p: any) => p : AdminLayout;

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <ThemeProvider theme={theme}>
            <NotificationsProvider>
              <ModalsProvider>
                <GlobalStyle />
                {Layout(<Component {...pageProps} />)}
              </ModalsProvider>
            </NotificationsProvider>
          </ThemeProvider>
        </MantineProvider>
      </QueryClientProvider>
    </JotaiProvider>
  );
}
