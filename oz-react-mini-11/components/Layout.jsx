import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;