import React from 'react';
import classes from './Skill.module.scss';
import Items from './Items/Items';


const skillItems = (props) => {
  return(
  <li>
    {props.children}
    <Items/>
  </li>
  )
}

export default skillItems;
