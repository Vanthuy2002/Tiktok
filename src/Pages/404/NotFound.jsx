import React from 'react';
import '../../components/Global/Global.scss';
import Button from '../../components/Button/Button';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='bg-img'></div>
      <Button to={'/'} className='back-home'>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
