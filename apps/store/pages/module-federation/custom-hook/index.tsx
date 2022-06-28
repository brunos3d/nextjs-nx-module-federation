import dynamic from 'next/dynamic';
import type { NextPage, NextPageContext } from 'next';

const page = import('../../../async-pages/module-federation/custom-hook');

const Page = dynamic(
  () => import('../../../async-pages/module-federation/custom-hook')
) as NextPage;

Page.getInitialProps = async (ctx: NextPageContext) => {
  const getInitialProps = ((await page).default as NextPage)?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};

export default Page;
