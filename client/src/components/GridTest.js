import React from 'react';
import Aux from '../hoc/Aux/Aux';
import classes from '../sass/main.module.scss';

const gridTest = (props) =>{


  return (
    <Aux>
      <div className={classes['row']}>
        <div className={classes['col-1-of-3']}>col-1-of-3</div>
        <div className={classes['col-1-of-3']}>col-1-of-3</div>
        <div className={classes['col-1-of-3']}>col-1-of-3</div>
      </div>
      <div className={classes['row']}>
        <div className={classes['col-1-of-2']}>col-1-of-2</div>
        <div className={classes['col-1-of-2']}>col-1-of-2</div>

      </div>
      <div className={classes['row']}>
        <div className={classes['col-1-of-4']}>col-1-of-4</div>
        <div className={classes['col-1-of-4']}>col-1-of-4</div>
        <div className={classes['col-1-of-4']}>col-1-of-4</div>
        <div className={classes['col-1-of-4']}>col-1-of-4</div>
      </div>
      <div className={classes['row']}>
        <div className={classes['col-1-of-3']}>col-1-of-3</div>
        <div className={classes['col-2-of-3']}>col-2-of-3</div>
      </div>
      <div className={classes['row']}>
        <div className={classes['col-2-of-4']}>col-2-of-4</div>
        <div className={classes['col-2-of-4']}>col-2-of-4</div>
      </div>
      <div className={classes['row']}>
        <div className={classes['col-1-of-4']}>col-1-of-4</div>
        <div className={classes['col-3-of-4']}>col-3-of-4</div>
      </div>

    </Aux>
  )
}

export default gridTest;
