import React from 'react';
import Button from '../../Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data, cliked }) => {
  return (
    <Button
      text
      icon={data.icon}
      to={data.to}
      className={cx('menu-items')}
      onClick={cliked}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
