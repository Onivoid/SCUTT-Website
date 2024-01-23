import { Html, Head, Main, NextScript } from 'next/document'
import { PrimeReactProvider } from 'primereact/api';


export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html>
      <Head />
        <body>
          <PrimeReactProvider>
            <Main />
            <NextScript />
          </PrimeReactProvider>
        </body>
    </Html>
  )
}
