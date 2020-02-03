import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../../components/UI/Button/Button';
import chufan from '../../../../assets/images/my-pic.jpg';
import classes from './Introduction.module.scss';

const introduction = (props) => {
  const homeLinkHandler = () =>{
    props.history.push({pathname:'/'});
  }
  return (

    <React.Fragment>
        <div className={classes['heading']}>
          <h1 className={[classes['heading-primary--about'],
            classes['heading__title']].join(' ')}>About me</h1>
        </div>
        <div className={[classes['content'],classes['u-padding-top-tiny']].join(' ')}>
          <figure className={classes['figure']}>
            <img className={classes['figure__my-pic']} src={chufan} alt="chufan"></img>
          </figure>
          <div className={classes['intro']}>

            <p className={classes['intro__text']}>
            I am a physics student graduted from University of Toronto.
            benefit from my physics education, I consider myself a fast learner. I feel excited when I'm learning new knowledge, and I would pick up anything that interests me. I'm currently working as a web developer.

          </p>
          <div className={classes['intro__link']}>
            <p>To move back to home page, move mouse to left or take this portal <Button action={homeLinkHandler} type='text-2'>Home</Button>.</p>
          </div>

          </div>
        </div>
    </React.Fragment>
  )
};

export default withRouter(introduction);
