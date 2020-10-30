import Head from 'next/head'
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Main = styled.main``;

interface LayoutInperface{
  children: React.ReactElement | React.ReactElement[];
  pageTitle?: string;
}

function Layout({ children, pageTitle }: LayoutInperface){
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME} {pageTitle ? ` - ${pageTitle}` : ''}</title>
      </Head>
      <Navbar />
      <Main>
        {children}
      </Main>
    </div>
  );
}

export default Layout;
