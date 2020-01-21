import React,{Component} from 'react';
import classes from './Skills.module.scss';
import {skillType} from './SkillsIndex';
import Skill from './Skill/Skill';

class Skills extends Component{
  state = {skillType}

  getSkills = (typeObj) => {
    let transformedType = [];
    for (let i in typeObj){
      transformedType.push(i);
    }

    return transformedType.map((keys)=>(<Skill>{keys}</Skill>))

  }



  //   //obj -> {Web,physics}
  //
  //   let transformedType = Object.keys(typeObj)
  //   .map((type) => {
  //     console.log(typeObj);
  //     console.log(type);
  //     console.log(typeObj.type);
  //     //[Web,physics] -> [{html,...},{analy...}]
  //     return ({
  //       ...typeObj.type
  //     })
  //   });
  //   console.log(transformedType);
  //   return transformedType;
  //


  render(){

    let webDev = this.getSkills(this.state.skillType.webDev);
    console.log(webDev);
  return(
    <div className={classes['skills-section']}>

      <h1 className={classes['heading-primary--about']}>Skills</h1>
      <div className={classes['skills']}>
      <div className={classes['skills__webdev']}>
        <ul className={classes['skills__list']}>
          <Skill>{this.state.skillType.webDev.test}</Skill>
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
