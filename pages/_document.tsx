import Document, { Head, Html, NextScript, Main } from "next/document";

const Page = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />

        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/img/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/img/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/img/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#B0BED4' />
        <meta name='msapplication-TileColor' content='#B0BED4' />
        <meta name='theme-color' content='#B0BED4' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default class extends Document {
  render(): JSX.Element {
    return <Page />;
  }
}
