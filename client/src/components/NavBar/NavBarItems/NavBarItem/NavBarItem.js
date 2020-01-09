import React from 'react';
import classes from './NavBarItem.module.scss';
import {NavLink, withRouter} from 'react-router-dom';

const navBarItem=(props)=>{
  let NavBarItemStyle = [classes['NavBarItem']]
  switch (props.location.pathname){
    case '/about':
    NavBarItemStyle.push(classes['NavBarItem--about'])
    break;
  default:
  break;
  }
  return(
    <li className={NavBarItemStyle.join(' ')}>
      <NavLink activeClassName={classes['active']} to={props.link} exact>{props.children}</NavLink>
    </li>
  );
};

export default withRouter(navBarItem);
