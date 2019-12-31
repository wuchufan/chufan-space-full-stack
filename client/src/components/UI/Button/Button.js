import React from 'react';
import classes from './Button.module.scss';

const button = (props) =>{
  let button = null;
  switch (props.type){
    case 'button':

    button = <button onClick={props.action}
      className={classes['btn']}>{props.children}</button>;
      break;

    case 'text':

    button = <span onClick={props.action} className={classes['btn--text']}>{props.children}</span>
    break;

    default:
    button = <button onClick={props.action}
      className={classes.btn}>{props.children}</button>;

  }
  return(
    <div>
      {button}
    </div>

  );
};

export default button;
