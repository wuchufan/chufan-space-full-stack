import React from 'react';
import classes from './EducationItem.module.scss';

const educationItem = (props) =>{

  return(<li className={classes['item']}>{props.children}</li>)
}

export default educationItem;
