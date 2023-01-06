import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { initializeApp } from 'firebase/app';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '@/lib/theme/xstyled.theme';
import { AdminLayout } from '@/lib/layout/AdminLayout';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

export default function App({ Component, pageProps }: AppProps) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

  initializeApp(firebaseConfig);

  return (
    <MantineProvider withNormalizeCSS>
      <ThemeProvider theme={theme}>
        <ModalsProvider>
          <GlobalStyle />
          {AdminLayout(<Component {...pageProps} />)}
        </ModalsProvider>
      </ThemeProvider>
    </MantineProvider>
  );
}
