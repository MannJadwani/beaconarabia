import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Beacon Arabia Consulting | Business Setup Services in Dubai</title>
          <meta name="description" content="Your trusted partner in business setup and consulting services in Dubai. With over 30 years of experience, we help businesses thrive in the UAE market." />
          <meta name="keywords" content="business setup dubai, company formation uae, pro services dubai, business consulting uae" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
          <meta name="msapplication-TileImage" content="/images/logo.png" />
          <meta name="msapplication-TileColor" content="#151a30" />
          <meta name="theme-color" content="#151a30" />
          <meta property="og:title" content="Beacon Arabia Consulting | Business Setup Services in Dubai" />
          <meta property="og:description" content="Your trusted partner in business setup and consulting services in Dubai. With over 30 years of experience, we help businesses thrive in the UAE market." />
          <meta property="og:image" content="/images/logo.png" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
