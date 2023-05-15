import React, { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { ImSearch } from 'react-icons/im';
import { BiLoader, BiMessageCheck } from 'react-icons/bi';
import { FaTimesCircle, FaUserCircle, FaBitcoin } from 'react-icons/fa';
import { FiMoreVertical, FiSettings } from 'react-icons/fi';
import {
  MdKeyboardAlt,
  MdQuestionAnswer,
  MdGTranslate,
  MdOutlineDriveFolderUpload,
  MdOutlineLogout,
} from 'react-icons/md';

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
    to: 'feedback',
  },
];

const userMenu = [
  {
    id: 4,
    icon: <FaUserCircle />,
    title: 'View Profile',
    to: 'profile',
  },
  {
    id: 5,
    icon: <FaBitcoin />,
    title: 'Get Coins',
    to: 'coins',
  },
  {
    id: 6,
    icon: <FiSettings />,
    title: 'Setting',
    to: 'setting',
  },
  ...MENU_ITEMS,
  {
    id: 7,
    icon: <MdOutlineLogout />,
    title: 'Logout',
    separate: true,
  },
];

const Header = () => {
  const [results, setResults] = useState([]);
  const currentUser = true;

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

      <HeadlessTippy
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
      </HeadlessTippy>

      <section className={cx('action')}>
        {currentUser ? (
          <section className={cx('current-user')}>
            <Tippy content='Upload'>
              <button className={cx('user-action')}>
                <MdOutlineDriveFolderUpload />
              </button>
            </Tippy>

            <Tippy content='Message'>
              <button className={cx('user-action')}>
                <BiMessageCheck />
              </button>
            </Tippy>
          </section>
        ) : (
          <React.Fragment>
            <Button to={'upload'} text icon={<IoMdAdd />}>
              Upload
            </Button>
            <Button primary>Login</Button>
          </React.Fragment>
        )}

        <Menu
          items={currentUser ? userMenu : MENU_ITEMS}
          onChange={handleChange}
        >
          {currentUser ? (
            <img
              src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200'
              alt=''
              className={cx('user-avatar')}
            />
          ) : (
            <button className={cx('more')}>
              <FiMoreVertical />
            </button>
          )}
        </Menu>
      </section>
    </header>
  );
};

export default Header;
