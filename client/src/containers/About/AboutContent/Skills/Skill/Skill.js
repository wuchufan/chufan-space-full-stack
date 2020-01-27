import React,{Component} from 'react';
import classes from './Skill.module.scss';
import Item from './Item/Item';


class Skill extends Component{

render(){
  let details = this.props.details
  .map((detail,index)=>(<Item key={index}>{detail}</Item>));

  return(
  <li className={
    this.props.details.length
    //Detail Box non-empty styles
    ? [classes['skill-box'],
      classes['cursor'],
    this.props.active
    ? classes['active']
    : this.props.fade ?
    classes['fade'] : null].join(' ')
    //Detail Box empty styles
    : [classes['skill-box--empty'], this.props.fade ? classes['fade'] : null].join(' ')} onClick={this.props.details.length ? this.props.clicked: null}>

    <h1 className={
      classes['skill-box__skill']
    }>{this.props.children}<span
      className={
        this.props.details.length ?
        [classes['skill-box__icon'],
        this.props.active ? classes['active'] : null].join(' ')
        : null}></span></h1>

    <ul className={
      [classes['detail-box'],
      this.props.active
      ? classes['detail-active']
      : null].join(' ')
        }>
      {details}
    </ul>
  </li>
  )
  }
}

export default Skill;
