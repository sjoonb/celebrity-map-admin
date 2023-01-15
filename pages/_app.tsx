// import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '../lib/theme/xstyled.theme';
import { AdminLayout } from '../lib/layout/AdminLayout';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Provider as JotaiProvider } from 'jotai';
import { Provider as UrqlProvider } from 'urql';
import { urqlClient } from '../lib/urql/urqlClient';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <JotaiProvider>
      <UrqlProvider value={urqlClient}>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <ThemeProvider theme={theme}>
            <ModalsProvider>
              <GlobalStyle />
              {AdminLayout(<Component {...pageProps} />)}
            </ModalsProvider>
          </ThemeProvider>
        </MantineProvider>
      </UrqlProvider>
    </JotaiProvider>
  );
}
