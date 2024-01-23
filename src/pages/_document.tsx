import { Html, Head, Main, NextScript } from 'next/document';
import { PrimeReactProvider } from 'primereact/api';


export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html>
      <Head>
        <title>SCUTT - Star Citizen Universal Translation Tool</title>
        <link rel="icon" type='image/png' href="/icon.png" />
        <meta name="theme-color" content="#111827" />
        <meta property="og:title" content="SCUTT - Star Citizen Universal Translation Tool" />
        <meta property="og:description" content="Multi-languages Translation Tool for Star Citizen" />
        <meta property="og:image" content="/Splash.png" />
        <meta property="og:url" content="https://scutt.onivoid.fr" />
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
