import React from 'react';
import { ImSearch } from 'react-icons/im';
import { BiLoader } from 'react-icons/bi';
import { FaTimesCircle } from 'react-icons/fa';
import images from '/src/assets/img/imgs';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Link to='/'>
          <img src={images.logo} alt='TikTok' />
        </Link>
      </div>

      <div className={cx('search')}>
        <input
          name='search'
          id='search'
          placeholder='Search'
          spellCheck='false'
        />

        <button className={cx('clear')}>
          <FaTimesCircle />
        </button>

        <span className={cx('loading')}>
          <BiLoader />
        </span>

        <button className={cx('search-btn')}>
          <ImSearch />
        </button>
      </div>

      <div className={cx('action')}></div>
    </header>
  );
};

export default Header;
