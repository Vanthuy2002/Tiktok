import React from 'react';
import { GoSearch } from 'react-icons/go';
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
          type='search'
          name='search'
          id='search'
          placeholder='Search'
          className={cx('search-input')}
          spellCheck='false'
        />

        <button className={cx('search-btn')}>
          <GoSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
