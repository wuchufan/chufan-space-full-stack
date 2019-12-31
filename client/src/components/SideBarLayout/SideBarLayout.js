import React from 'react';
import classes from './SideBarLayout.module.scss';

const sideBarContent = (props) =>{

  return(
    <div className={classes['side-bar']}>
      <div className={classes['side-bar__title']}>
        <h1 className={[classes['heading-secondary'],classes['heading-secondary--main']].join(' ')}>
          {props.title}
        </h1>
      </div>
      <div className={classes['side-bar__cat-words']}>
        {props.children}
      </div>
      <div className={classes['side-bar__other']}>

      </div>
    </div>
  );
};

export default sideBarContent;
