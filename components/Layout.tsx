import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container } from '@mantine/core';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <header />
    <Container size='xl'>{children}</Container>
    <footer />
  </div>
);

export default Layout;
