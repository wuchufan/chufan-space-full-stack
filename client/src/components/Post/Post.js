import React from 'react';
import classes from './Post.module.scss';

const post = (props) => {
  return (

    <article className={classes['Post']}>
      <div className={classes['Post__container']}>


      <h3 className={classes['Post__title']} onClick={props.clicked}>
        {props.title}
      </h3>
      </div>
    </article>);
};

export default post;
