import React from 'react';
import classes from './Post.module.scss';

const post = (props) => {
  return (

    <article className={classes.Post} onClick={props.clicked}>
      <h1 className={classes['heading-primary']}>
        {props.title}
      </h1>
      <p className={classes.paragraph}>
        {props.content}
      </p>
    </article>);
};

export default post;
