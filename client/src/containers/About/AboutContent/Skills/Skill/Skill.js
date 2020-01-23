import React,{Component} from 'react';
import classes from './Skill.module.scss';
import Item from './Item/Item';


class SkillItems extends Component{
  state={
    show:false
  }


  showDetailHandler = () => {

    this.setState({show:!this.state.show})
  }
render(){
  let details = this.props.details
  .map((detail,index)=>(<Item key={index}>{detail}</Item>));



  return(
  <li className={classes['skill-box']} onClick={()=> this.showDetailHandler()}>
    {this.props.children}
    <ul className={
      this.state.show
        ? [classes['detail-box'],classes['active']].join(' ')
        : classes['detail-box']
    }>
      {details}
    </ul>
  </li>
  )
  }
}

export default SkillItems;
