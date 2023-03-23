import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import AppRoutes from '../routes';
import { Main } from './styles';

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </BrowserRouter>
  );
}

export default Layout;
