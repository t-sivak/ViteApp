import Footer from './footer/Footer.jsx';
import { Outlet } from 'react-router';
import Header from './header/Header.jsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
