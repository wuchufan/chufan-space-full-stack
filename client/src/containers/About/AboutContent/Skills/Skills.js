import React,{Component} from 'react';
import classes from './Skills.module.scss';
import skillType from './SkillsAppendix.json';
import Skill from './Skill/Skill';

class Skills extends Component{
  state = {
    activeIndex:null,
    activeType:null
  }

  itemClickedHanlder = (index,type) => {
    for (let i in skillType){
      if (i === type){
        if (this.state.activeIndex !== index){
          //before it was nothing or not clicking the same thing
          this.setState({activeIndex:index, activeType:type});
        } else {
          if (this.state.activeType !== type){
            //clicked the same row but in different type
            this.setState({activeIndex:index, activeType:type});
          } else{
            //clicked the same thing
            //make it inactive
            console.log(21);
            this.setState({activeIndex:null, activeType:null});
          }

        }
      }
    }


  }

  getSkills = (renderType) => {
    let transObj = Object.keys(skillType) // ->[webDev,physics]
    .map((type) => {
        if (renderType === type){
          //type -> webDev, physics
          let skills = Object.keys(skillType[type]) //->[HTML,CSS,...]
          //skillType[skill] -> HTML


          return(skills.map((skill,index)=>{
            let details = skillType[type][skill]

            return (<Skill
              clicked={()=>this.itemClickedHanlder(index,type)}
              active={this.state.activeIndex === index && this.state.activeType === type}
              key={index}
              details={details}>
              {skill}
            </Skill>)
          })
          )
        }


    });

    return transObj;
  }


  render(){

  return(
    <div className={classes['skills-section']}>

      <h1 className={classes['heading-primary--about']}>Skills</h1>
      <div className={classes['skills']}>
        <div className={classes['skills__webdev']}>
          <h2>Web development</h2>
          <ul className={classes['skills__list']}>
            {this.getSkills('webDev')}
          </ul>
        </div>
        <div className={classes['skills__physics']}>
          <h2>Physics</h2>
          <ul className={classes['skills__list']}>

            {this.getSkills('physics')}
        </ul>
      </div>
      </div>
    </div>

    )
  }
};

export default Skills;
