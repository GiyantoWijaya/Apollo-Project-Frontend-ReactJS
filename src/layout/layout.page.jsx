import React from 'react';
import NavigationBar from '../components/homeNavbar/NavigationBar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
