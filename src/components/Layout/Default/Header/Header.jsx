import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { ImSearch } from 'react-icons/im';
import { BiLoader } from 'react-icons/bi';
import { FaTimesCircle } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { MdKeyboardAlt, MdQuestionAnswer, MdGTranslate } from 'react-icons/md';

import images from '/src/assets/img/imgs';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import WrapperOfPopper from '/src/components/Popper/Poper';
import AccountItem from '/src/components/Accounts/Account.jsx';
import Button from '../../../Button/Button';
import Menu from '/src/components/Popper/Menu/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    id: 1,
    icon: <MdGTranslate />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { code: 'vi', title: 'Vietnamese' },
        { code: 'en', title: 'English' },
      ],
    },
  },
  { id: 2, icon: <MdKeyboardAlt />, title: 'Keyboard Shortcuts' },
  {
    id: 3,
    icon: <MdQuestionAnswer />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
];

const Header = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setResults([]);
    }, 0);
  }, []);

  const handleChange = (menuItem) => {
    console.log(menuItem);
  };

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

      <div className={cx('action')}>
        <Button to={'upload'} text icon={<IoMdAdd />}>
          Upload
        </Button>
        <Button primary>Login</Button>

        <Menu items={MENU_ITEMS} onChange={handleChange}>
          <button className={cx('more')}>
            <FiMoreVertical />
          </button>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
