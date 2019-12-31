import React from 'react';
import NavBarItem from './NavBarItem/NavBarItem';
import classes from './NavBarItems.module.scss';

const navBarItems=(props)=>{

  return(
    <ul className={classes.NavBarItems}>
      <NavBarItem link='/'>Home</NavBarItem>
      <NavBarItem link='/posts'>Posts</NavBarItem>
      <NavBarItem link='/library'>Library</NavBarItem>
      <NavBarItem link='/about'>About Me</NavBarItem>
    </ul>
  );
}

export default navBarItems;
