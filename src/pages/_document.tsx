import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&family=Montserrat:wght@400;500&family=Playfair+Display&display=swap"
          rel="stylesheet"/>

      </Head>
      <body className='bodyoverlay'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
