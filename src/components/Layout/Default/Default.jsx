import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Default = ({ children }) => {
  return (
    <div>
      <Header />
      <section className='container'>
        <Sidebar />
        <section className='content'>{children}</section>
      </section>
    </div>
  );
};

export default Default;
