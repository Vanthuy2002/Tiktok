import React from 'react';
import Header from '../Default/Header/Header';

const HeadOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <section className='container'>
        <section className='content'>{children}</section>
      </section>
    </div>
  );
};

export default HeadOnly;
