import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import classNames from 'classnames/bind';
import styles from './Default.module.scss';

const cx = classNames.bind(styles);

const Default = ({ children }) => {
  return (
    <section className={cx('wrapper')}>
      <Header />
      <section className={cx('container')}>
        <Sidebar />
        <section className={cx('content')}>{children}</section>
      </section>
    </section>
  );
};

export default Default;
