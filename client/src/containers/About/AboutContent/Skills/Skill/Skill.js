import React,{Component} from 'react';
import classes from './Skill.module.scss';
import Item from './Item/Item';


class Skill extends Component{

render(){
  let details = this.props.details
  .map((detail,index)=>(<Item key={index}>{detail}</Item>));
  let cursorStyle = classes['cursor'];
  if (!this.props.details.length){ cursorStyle = null }

  return(
  <li className={[classes['skill-box'],
    cursorStyle,
    this.props.active
    ? classes['active']
    : this.props.fade ? classes['fade'] : null].join(' ')} onClick={this.props.clicked}>

    <h1 className={classes['skill-box__skill']}>{this.props.children}<span
      className={
        [classes['skill-box__icon'],
        this.props.active ? classes['active'] : null].join(' ')

    }></span></h1>

    <ul className={
      [classes['detail-box'],
      this.props.active
      ? classes['active']
      : null].join(' ')
        }>
      {details}
    </ul>
  </li>
  )
  }
}

export default Skill;
