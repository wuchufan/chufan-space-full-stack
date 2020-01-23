import React from 'react';
import classes from './Skill.module.scss';
import Item from './Item/Item';


const skillItems = (props) => {
  let details = props.details;
  return(
  <li className={classes['skill-box']}>
    {props.children}
    <ul className={classes['detail-box']}>
      <Item>{details}</Item>
    </ul>
  </li>
  )
}

export default skillItems;
