import React from 'react';
import classes from './AboutContent.module.scss';

import Skills from './Skills/Skills';

const aboutContent = (props) => {

  return (
    <section className={classes['section-about']}>

      <Skills/>
    </section>
  )
};

export default aboutContent
