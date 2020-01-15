import React from 'react';
import NavBarItem from './NavBarItem/NavBarItem';
import classes from './NavBarItems.module.scss';

const navBarItems=(props)=>{
  let NavBarItemsStyle = [classes['NavBarItems']];
  switch (props.location){
    case '/about':
    NavBarItemsStyle.push(classes['NavBarItems--about'])
    break;
    default:
    break;
  }
  return(
    <ul className={NavBarItemsStyle.join(' ')}>
      <NavBarItem link='/'>Home</NavBarItem>
      <NavBarItem link='/posts'>Articles</NavBarItem>
      <NavBarItem link='/library'>Library</NavBarItem>
      <NavBarItem link='/about'>About Me</NavBarItem>
    </ul>
  );
}

export default navBarItems;
