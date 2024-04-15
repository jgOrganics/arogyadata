
// import React, { Children } from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout