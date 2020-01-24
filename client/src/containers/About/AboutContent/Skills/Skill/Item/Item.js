import React from 'react';
import classes from './Item.module.scss';


const item = (props) => {

  return(
    <li className={classes['item']}>&#8627; {props.children}</li>
  )
};

export default item;
