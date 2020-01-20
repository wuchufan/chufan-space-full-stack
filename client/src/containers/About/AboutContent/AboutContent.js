import React from 'react';
import classes from './AboutContent.module.scss';
import Education from './Education/Education';
import Skills from './Skills/Skills';

const aboutContent = (props) => {

  return (
    <section className={classes['section-about']}>

      <Skills/>
      <Education/>
    </section>
  )
};

export default aboutContent
