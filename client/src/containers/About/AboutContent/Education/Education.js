import React from 'react';
import classes from './Education.module.scss';

const education = (props) =>{
  return(
    <div className={classes['education']}>
      <h1 className={classes['heading-primary--about']}>Education</h1>
      <h1>Physics courses:</h1>
      <ul className={classes['education__list']}>
        <li>Classical Mechanics</li>
        <li>Quantum Mechanics</li>
        <li>Electromagnetism</li>
        <li>Nuclear physics</li>
        <li>Thermal physics/statistical mechanics</li>
        <li>High energy physics</li>
        <li>Interpretation of quantum mechanics</li>
        <li>Experimental physics</li>
      </ul>
      <h1>Math courses:</h1>
      <ul className={classes['education__list']}>
        <li>Calculus</li>
        <li>Multivariable Calculus</li>
        <li>Linear Algebra</li>
        <li>Complex variable</li>
        <li>Ordinary differential equation</li>
        <li>Partial differential equation</li>

      </ul>
    </div>

  )
}

export default education;
