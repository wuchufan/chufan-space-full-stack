import React from 'react';
import classes from './Skills.module.scss';


const skills = (props) => {
  return(
    <div className={classes['skills']}>

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

  )
};

export default skills;
