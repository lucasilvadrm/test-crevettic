import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { Main } from './styles';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Container />
      </Main>
    </>
  );
}

export default Layout;
