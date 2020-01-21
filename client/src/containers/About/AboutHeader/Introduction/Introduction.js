import React from 'react';
import chufan from '../../../../assets/images/my-pic.jpg';
import classes from './Introduction.module.scss';

const introduction = (props) => {
  return (

      <div className={classes['block-intro']}>
        <div className={classes['heading']}>
          <h1 className={[classes['heading-primary--about'],
            classes['heading__title']].join(' ')}>About me</h1>
        </div>
        <div className={classes['containp']}>
          <figure className={classes['figure']}>
            <img className={classes['figure__my-pic']} src={chufan} alt="chufan"></img>
          </figure>
          <div className={classes['intro']}>

            <p className={classes['intro__text']}>Hello, My name is Chufan Wu.
              I was a physics student graduted from University of Toronto.
            Benefit from my physics degree, I consider myself a fast learner.I feel excited when I'm learning new knowledge, and I would pick up anything that interests me.</p>

          </div>
        </div>
      </div>

  )
};

export default introduction;
