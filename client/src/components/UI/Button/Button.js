import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';


//props:Type, action
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

    case 'text-2':
    button = <span onClick={props.action} className={classes['btn--text--2']}>{props.children}</span>
    break;


    default:
    button = <button onClick={props.action}
      className={classes.btn}>{props.children}</button>;

  }
  return button
};

button.propTypes = {
  action:PropTypes.func.isRequired,
  type:PropTypes.string.isRequired
}

export default button;
