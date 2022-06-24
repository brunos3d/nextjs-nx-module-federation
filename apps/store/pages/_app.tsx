/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to store!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}
