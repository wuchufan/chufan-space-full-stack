import React from 'react';
import classes from './Item.module.scss';


const item = (props) => {

  return(
    <li className={classes['item']}>{props.children}</li>
  )
};

export default item;
