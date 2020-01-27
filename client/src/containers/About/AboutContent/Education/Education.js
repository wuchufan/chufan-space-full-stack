import React from 'react';
import classes from './Education.module.scss';
import EducationItem from './EducationItem/EducationItem';
import EduElem from './EducationIndex.json';



const education = (props) =>{

  const getCourses = (type) =>{
    let transObj = EduElem[type].map((course,index)=>{

      return(<EducationItem key={index + type}>{course}</EducationItem>)
    })
    return transObj
  }



  return(
    <div className={classes['education']}>
      <h1 className={classes['heading-primary--about']}>Education</h1>
      <div className={classes['basics']}>
        <div className={classes['basics__school-box']}>
          <h1 className={classes['basics__school']}>
            University of Toronto <span className={classes['basics__date']}>Sep 2014 - May 2018</span>
          </h1>
        </div>
        <div className={classes['basics__major-box']}>
          <p>University of Toronto Physics specialist</p>
        </div>
      </div>
      <div className={classes['courses']}>
        <div className={classes['courses__physics-box']}>
      <h1 className={classes['courses__title']}>Physics courses</h1>
      <ul className={classes['courses__list']}>
        {getCourses('physics')}
      </ul>
      </div>
      <div className={classes['courses__math-box']}>
      <h1 className={classes['courses__title']}>Mathemathics courses</h1>
      <ul className={classes['courses__list']}>
        {getCourses('math')}
      </ul>
      </div>
      </div>
    </div>

  )
}

export default education;
