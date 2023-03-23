import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import AppRoutes from '../routes';

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Box
        sx={{
          padding: 10,
        }}
      >
        <AppRoutes />
      </Box>
    </BrowserRouter>
  );
}

export default Layout;
