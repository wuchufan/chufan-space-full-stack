import React,{Component} from 'react';
import classes from './Skill.module.scss';
import Item from './Item/Item';


class Skill extends Component{

render(){
  let details = this.props.details
  .map((detail,index)=>(<Item key={index}>{detail}</Item>));


  return(
  <li className={classes['skill-box']} onClick={this.props.clicked}>

    <h1>{this.props.children}</h1>
    <ul className={
        this.props.active

          ? [classes['detail-box'],classes['active']].join(' ')
          : classes['detail-box']
      }>
      {details}
    </ul>
  </li>
  )
  }
}

export default Skill;
