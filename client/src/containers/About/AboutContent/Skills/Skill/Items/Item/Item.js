import React from 'react';
import classes from './Item.module.scss';


const item = (props) => {
  return(
    <li>{props.children}</li>
  )
};

export default item;
