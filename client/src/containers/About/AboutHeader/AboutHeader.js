import React from 'react';
import Introduction from './Introduction/Introduction';
import classes from './AboutHeader.module.scss';


const aboutHeader = (props) => {

  return(
    <header className={classes['header']}>

      <div className={classes['heading-box']}>
        <h1 className={classes['heading-box__text']}>My name is <span className={classes['heading-box__text--name']}>Chufan Wu</span>.</h1>
        <h1 className={classes['heading-box__text']}>A knowledge addict.</h1>
        <h1 className={classes['heading-box__text']}>And a challenge lover.</h1>
      </div>

      <div className={classes['intro'] + ' ' + classes['u-padding-top-small']}>

        <Introduction/>
      </div>
      <div className={classes['text-block'] + ' ' + classes['u-padding-top-small']}>
        <h1 className={classes['heading-primary--about--sub']}>And...</h1>
        <p className={classes['text-block__text']}>
           My works mostly focus on front-end development, but I'm also interested in back-end and actively learning new back-end techniques.
        </p>

      </div>
    </header>
  )
};

export default aboutHeader;
