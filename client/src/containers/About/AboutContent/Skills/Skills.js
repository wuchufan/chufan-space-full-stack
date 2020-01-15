import React from 'react';
import classes from './Skills.module.scss';


const skills = (props) => {
  return(
    <div className={classes['skills']}>


      <div className={classes['skills__education']}>
        <h1>The physics courses I took were:</h1>
        <ul className={classes['skills__list']}>
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
        <ul className={classes['skills__list']}>
          <li>Calculus</li>
          <li>Multivariable Calculus</li>
          <li>Linear Algebra</li>
          <li>Complex variable</li>
          <li>Ordinary differential equation</li>
          <li>Partial differential equation</li>

        </ul>
      </div>




      <div className={classes['skills__technical']}>
        <h1>Skills I have for web development are:</h1>
        <ul className={classes['skills__list']}>
          <li>HTML -- including canvas</li>
          <li>CSS -- Float layout, Flexbox layout, Grid layout, responsive design</li>
          <li>Bootstrap</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>ReactJs -- Redux</li>
          <li>NodeJs -- express</li>
          <li>Mongodb -- Mongoose</li>
          <li>Version control -- git</li>
          <li>npm packages</li>
          <li>Bash command line</li>
        </ul>

      </div>

  </div>

  )
};

export default skills;
