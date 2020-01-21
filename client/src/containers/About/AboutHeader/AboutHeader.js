import React from 'react';
import Introduction from './Introduction/Introduction';
import classes from './AboutHeader.module.scss';


const aboutHeader = (props) => {

  return(
    <header className={classes['header']}>

      <div className={classes['heading-box']}>
        <h1 className={classes['heading-box__text']}>My name is <span className={classes['text-box__text--name']}>Chufan Wu</span>.</h1>
        <h1 className={classes['heading-box__text']}>I learn stuff.</h1>
        <h1 className={classes['heading-box__text']}>I build stuff.</h1>
      </div>

      <div className={classes['intro']}>

        <Introduction/>
      </div>
      <div className={classes['text-block']}>
        <p className={classes['text-block__text']}>
          I'm currently working as a web developer, and my works mostly focus on front-end development, but I'm also interested in back-end and trying to learn as much as I can in my free time.
        </p>

      </div>
    </header>
  )
};

export default aboutHeader;
