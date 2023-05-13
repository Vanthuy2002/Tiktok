import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import WrapperOfPopper from '../Poper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive={true}
      delay={[0, 500]}
      placement='bottom-end'
      render={(attrs) => (
        <section className={cx('more-items')} tabIndex='-1' {...attrs}>
          <WrapperOfPopper className={cx('custom-padding')}>
            {renderItem()}
          </WrapperOfPopper>
        </section>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
