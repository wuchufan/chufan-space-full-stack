import React,{Component} from 'react';
import classes from './Skills.module.scss';
import skillType from './SkillsAppendix.json';
import Skill from './Skill/Skill';

class Skills extends Component{
  state = {
    activeIndex:null
  }

  itemClickedHanlder = (index) => {
    if (this.state.activeIndex !== index){
      //before it was nothing or not clicking the same thing
      this.setState({activeIndex:index});
    } else {
      //clicked the same thing
      //make it inactive
      this.setState({activeIndex:null});
    }

  }

  getSkills = (obj) => {
    let transObj = Object.keys(obj)
    .map((skill,index) => {
      let details = Object.values(obj);

      return (
      <Skill
        clicked={()=>this.itemClickedHanlder(index)}
        index={index}
        active={this.state.activeIndex === index}
        details={details[index]}
        key={index}>{skill}
      </Skill>)
    });
    return transObj;
  }


  render(){

    let webDev = this.getSkills(skillType.webDev);
    let physics = this.getSkills(skillType.physics);


  return(
    <div className={classes['skills-section']}>

      <h1 className={classes['heading-primary--about']}>Skills</h1>
      <div className={classes['skills']}>
        <div className={classes['skills__webdev']}>
          <h2>Web development</h2>
          <ul className={classes['skills__list']}>
            {webDev}
          </ul>
        </div>
        <div className={classes['skills__physics']}>
          <h2>Physics</h2>
          <ul className={classes['skills__list']}>

            {physics}
        </ul>
      </div>
      </div>
    </div>

    )
  }
};

export default Skills;
