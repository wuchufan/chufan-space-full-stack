import React from 'react';
import chufan from '../../../../assets/images/my-pic.jpg';
import classes from './Introduction.module.scss';

const introduction = (props) => {
  return (

      <div className={classes['intro']}>
        <div className={classes['figure']}>
          <img className={classes['figure__my-pic']} src={chufan} alt="chufan"></img>
        </div>

        <h1 className={classes['intro__text']}>Hello, My name is Chufan Wu</h1>
        <h1 className={classes['intro__text']}>I was a physics student graduted from University of Toronto.</h1>
        <h1 className={classes['intro__text']}>Benefit from my physics degree, I consider myself a fast learner.</h1>
        <h1 className={classes['intro__text']}>I feel excited when I'm learning new knowledge, and I would pick up anything that interests me.</h1>
        <h1 className={classes['intro__text']}>I'm currently building working as a web developer. I have been working for a year, and my works mostly focus on front-end development, but I'm also interested in back-end and trying to learn as much as I can in my free time.</h1>
      </div>

  )
};

export default introduction;
