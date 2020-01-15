import React from 'react';
import classes from './AboutHeader.module.scss';


const aboutHeader = (props) => {
  return(
    <header className={classes['header']}>
      <div className={classes['header__text-box']}>
        <h1 className={classes['header__text']}>Hello, I'm Chufan Wu</h1>
      </div>
    </header>
  )
};

export default aboutHeader;