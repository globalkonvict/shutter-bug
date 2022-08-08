import React from 'react';
import Navbar from 'layouts/components/Navbar';
import ChildrenCOntainer from 'layouts/components/ChildrenContainer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ChildrenCOntainer>{children}</ChildrenCOntainer>
    </>
  );
}

export default Layout;
