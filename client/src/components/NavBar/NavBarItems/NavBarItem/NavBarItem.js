import React from 'react';
import classes from './NavBarItem.module.scss';
import {NavLink} from 'react-router-dom';

const navBarItem=(props)=>{

  return(
    <li className={classes.NavBarItem}>
      <NavLink activeClassName={classes.active} to={props.link} exact>{props.children}</NavLink>
    </li>
  );
};

export default navBarItem;
