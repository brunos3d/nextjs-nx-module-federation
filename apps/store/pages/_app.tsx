/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to store!</title>
      </Head>
      <main className="app">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
