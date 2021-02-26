import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Page } from '@geist-ui/react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header />
    <Page>{children}</Page>
    <footer />
  </div>
);

export default Layout;
