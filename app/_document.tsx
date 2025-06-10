import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add Puter.js script here */}
        <script src="https://js.puter.com/v2/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
