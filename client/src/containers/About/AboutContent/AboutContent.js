import React from 'react';
import classes from './AboutContent.module.scss';
import Introduction from './Introduction/Introduction';
import Skills from './Skills/Skills';

const aboutContent = (props) => {
  return (
    <section className={classes['section-about']}>
      <Introduction/>
      <Skills/>
    </section>
  )
};

export default aboutContent
