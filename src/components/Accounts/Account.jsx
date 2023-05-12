import React from 'react';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { BsCheckCircleFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <section className={cx('wrapper')}>
      <img
        loading='lazy'
        src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <p className={cx('auth')}>
          <span>Nguyen Van Thuy</span>
          <BsCheckCircleFill className={cx('check')} />
        </p>
        <span className={cx('user-name')}>thuynguyen@2002</span>
      </div>
    </section>
  );
};

export default AccountItem;
