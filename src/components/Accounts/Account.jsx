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
        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/df5dc2a101e88db418c2f6ff42445552~c5_100x100.jpeg?x-expires=1683648000&x-signature=M7m2x1oiq%2FMMLyAWXOszrRwFk94%3D'
        alt='thuy'
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
