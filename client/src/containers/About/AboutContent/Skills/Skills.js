import React,{Component} from 'react';
import classes from './Skills.module.scss';
import {skillType} from './SkillsAppendix';
import Skill from './Skill/Skill';

class Skills extends Component{
  state = {skillType}


  getSkills = (obj) => {
    let transObj = Object.keys(obj)
    .map((skill,index) => {
      let details = Object.values(obj);
      return <Skill details={details[index]} key={index}>{skill}</Skill>
    });
    return transObj;
  }







  render(){

    let webDev = this.getSkills(this.state.skillType.webDev);
  return(
    <div className={classes['skills-section']}>

      <h1 className={classes['heading-primary--about']}>Skills</h1>
      <div className={classes['skills']}>
        <div className={classes['skills__webdev']}>
          <ul className={classes['skills__list']}>

            {webDev}
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
      <div className={classes['skills__physics']}>
        <ul className={classes['skills__list']}>
          <li>Data analysis using python, C/C++</li>
        </ul>
      </div>
      </div>
    </div>

    )
  }
};

export default Skills;
