import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { BiLoader } from 'react-icons/bi';
import { FaTimesCircle } from 'react-icons/fa';

import images from '/src/assets/img/imgs';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import WrapperOfPopper from '/src/components/Popper/Poper';
import AccountItem from '/src/components/Accounts/Account.jsx';

const cx = classNames.bind(styles);

const Header = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setResults([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Link to='/'>
          <img src={images.logo} alt='TikTok' />
        </Link>
      </div>

      <Tippy
        interactive={true}
        visible={results.length > 0}
        render={(attrs) => (
          <section className={cx('search-results')} tabIndex='-1' {...attrs}>
            <WrapperOfPopper>
              <h4 className={cx('search-label')}>Accounts</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </WrapperOfPopper>
          </section>
        )}
      >
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
      </Tippy>

      <div className={cx('action')}></div>
    </header>
  );
};

export default Header;
