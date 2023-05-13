import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  primary,
  outline,
  small,
  large,
  text,
  disable,
  rounded,
  className,
  onClick,
  children,
  passProps,
  icon,
}) => {
  let Comp = 'button';
  let _props = { onClick, ...passProps };
  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = 'a';
  }

  if (disable) {
    delete _props.onClick;
  }

  return (
    <Comp
      className={cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
      })}
      {..._props}
    >
      {icon && <span className={cx('wrapper-icon')}>{icon}</span>}
      <span>{children}</span>
    </Comp>
  );
};

export default Button;
