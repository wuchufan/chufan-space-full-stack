import React from 'react';
import Introduction from './Introduction/Introduction';
import classes from './AboutHeader.module.scss';


const aboutHeader = (props) => {

  return(
    <header className={classes['header']}>
      
      <div className={classes['text-box']}>
        <h1 className={classes['text-box__text']}>Hello, I'm Chufan Wu</h1>
        <h1 className={classes['text-box__text']}>I play video games.</h1>
        <h1 className={classes['text-box__text']}>I love knowledge.</h1>
        <h1 className={classes['text-box__text']}>I love knowledge.</h1>

      </div>
      <div className={classes['intro']}>

        <Introduction/>
      </div>
    </header>
  )
};

export default aboutHeader;
