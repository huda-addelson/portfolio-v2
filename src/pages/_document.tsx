import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html className='scroll-smooth' lang='en'>
        <Head>
          <link
            href='https://fontbit.io/css2?family=Fira+Code:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link rel='manifest' href='/manifest.json' />
          <meta name='theme-color' content='#3B82F6' />
        </Head>
        <body className='font-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
