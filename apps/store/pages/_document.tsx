/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            data-webpack="checkout"
            src={`${process.env.NEXT_PUBLIC_CHECKOUT_URL || 'http://localhost:4200'}/_next/static/chunks/remoteEntry.js`}
          />
          <script
            data-webpack="store"
            src={`${process.env.NEXT_PUBLIC_STORE_URL ||  'http://localhost:4300'}/_next/static/chunks/remoteEntry.js`}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
