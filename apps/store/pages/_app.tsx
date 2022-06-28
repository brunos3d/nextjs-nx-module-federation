/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to store!</title>
        <script
          data-webpack="checkout"
          src="http://localhost:4200/_next/static/chunks/remoteEntry.js"
        />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}
