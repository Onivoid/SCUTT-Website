import { Html, Head, Main, NextScript } from 'next/document'
import { PrimeReactProvider } from 'primereact/api';
import Icon from '@/resources/icon.png';


export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html>
      <Head>
        <title>SCUTT - Star Citizen Universal Translation Tool</title>
        <link rel="icon" href="https://github.com/Onivoid/SCUTT-Website/blob/master/src/resources/icon.png" />
        <meta name="theme-color" content="#111827" />
      </Head>
        <body>
          <PrimeReactProvider>
            <Main />
            <NextScript />
          </PrimeReactProvider>
        </body>
    </Html>
  )
}
