import React from 'react';
import classes from './NavBrand.module.scss';
import {NavLink} from 'react-router-dom';

const navBrand=(props)=>{
  return(

    <div className={classes['nav-brand']}>
      <NavLink
        to={props.link} className={classes['nav-brand__link']}>Chufan</NavLink>
    </div>
  );

}

export default navBrand;
