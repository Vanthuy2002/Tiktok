import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const HeaderChild = ({ title, onBack }) => {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <MdOutlineArrowBackIos />
      </button>

      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
};

export default HeaderChild;
