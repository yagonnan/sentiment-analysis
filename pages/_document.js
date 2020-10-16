import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {

    try {
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
      };
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
