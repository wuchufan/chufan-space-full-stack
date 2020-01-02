import React from 'react';
import classes from './Post.module.scss';

const post = (props) => {
  return (

    <article className={classes['Post']}>
      <h3 className={classes['Post__title']} onClick={props.clicked}>
        {props.title}
      </h3>
    </article>);
};

export default post;
