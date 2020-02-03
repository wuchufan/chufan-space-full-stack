import React,{ Component } from 'react';
import classes from './Education.module.scss';
import MajorArticle from './MajorArticle/MajorArticle';
import EducationItem from './EducationItem/EducationItem';
import Button from '../../../../components/UI/Button/Button';
import EduElem from './EducationIndex.json';



class Education extends Component{
    state = {
      showCourse:false,
      showDetail:false
    }

    courseToggleHandler = () => {
      this.setState((prevState) => {
        return {showCourse:!prevState.showCourse}
      })
    }
    detailToggleHandler = () =>{
      this.setState((prevState)=>{
        return {showDetail:!prevState.showDetail}
      })
    }
   getCourses = (type) =>{
    let transObj = EduElem[type].map((course,index)=>{

      return(<EducationItem key={index + type}>{course}</EducationItem>)
    })
    return transObj
  }


  render(){


  let buttonCourse = this.state.showCourse
  ?   <Button type="text-2" action={this.courseToggleHandler}>Hide courses</Button>
  :  <Button type="text-2" action={this.courseToggleHandler}>I've taken these courses!</Button>

  let buttonDetail = this.state.showDetail
  ? <Button type="text-2" action={this.detailToggleHandler}>Hide...</Button>
  : <Button type="text-2" action={this.detailToggleHandler}>Learn more!</Button>

  let course = this.state.showCourse?
  (<div className={classes['courses']}>
        <h1 className={classes['heading-primary--about']}>Courses</h1>
        <div className={classes['courses__container'] + ' ' + classes['u-margin-bottom-small']}>
      <div className={classes['courses__physics-box']}>
      <h1 className={classes['courses__title']}>Physics</h1>
      <ul className={classes['courses__list']}>
        {this.getCourses('physics')}
      </ul>
      </div>
      <div className={classes['courses__math-box']}>
      <h1 className={classes['courses__title']}>Mathemathics</h1>
      <ul className={classes['courses__list']}>
        {this.getCourses('math')}
      </ul>
      </div>
      <div className={classes['courses__philosophy-box']}>
        <h1 className={classes['courses__title']}>Philosophy</h1>
        <ul className={classes['courses__list']}>
          {this.getCourses('philosophy')}
        </ul>
      </div>
    </div>
  <div className={classes['button']}>
    {buttonCourse}
  </div>
    </div>)
    : null;

    let detail = this.state.showDetail
    ? (<div className={classes['major-detail'] + ' ' + classes['u-margin-bottom-small']}>
      <h1 className={classes['heading-primary--about']}>More?... More!</h1>
      <article className={classes['major-detail__article'] + ' ' + classes['u-margin-bottom-small']}>
        <MajorArticle/>
      </article>
      <div className={classes['button']}>
        {buttonDetail}
      </div>
    </div>)
    : null;

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
          <h1 className={classes['u-margin-bottom-tiny']}>Physics specialist</h1>
          <p className={classes['u-margin-bottom-small']}>
            My physics education gave me rigourous training in mathematics and physics, and this enables me to pick up web development easily.
          </p>
         {buttonDetail}{buttonCourse}
        </div>
      </div>
      {detail}
      {course}

    </div>


    )
  }
}

export default Education;
