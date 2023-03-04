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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const baseApi = new BaseAPI(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_BASE_API_PATH })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <ThemeProvider theme={theme}>
            <ModalsProvider>
              <GlobalStyle />
              {AdminLayout(<Component {...pageProps} />)}
            </ModalsProvider>
          </ThemeProvider>
        </MantineProvider>
      </QueryClientProvider>
    </JotaiProvider>
  );
}
