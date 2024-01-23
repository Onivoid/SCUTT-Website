import '@/i18n/i18n';
import { LanguageProvider } from '@/components/languageContext';
import React from 'react';
import type { AppProps } from 'next/app';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import '@/styles/global/index.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';  
import Layout from '@/components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    );
}
