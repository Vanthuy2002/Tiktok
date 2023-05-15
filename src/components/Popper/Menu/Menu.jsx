import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import WrapperOfPopper from '../Poper';
import MenuItem from './MenuItem';
import HeaderChild from './HeaderChild';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [], onChange }) => {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      let isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          cliked={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive={true}
      delay={[0, 500]}
      placement='bottom-end'
      render={(attrs) => (
        <section className={cx('more-items')} tabIndex='-1' {...attrs}>
          <WrapperOfPopper className={cx('custom-padding')}>
            {history.length > 1 && (
              <HeaderChild
                title={'Language'}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItem()}
          </WrapperOfPopper>
        </section>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
