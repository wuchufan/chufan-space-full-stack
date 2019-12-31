import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './SideBar.module.scss';


class SideBar extends Component{


  render(){
    let sideBarWidth=[classes['side-bar']]
    switch (this.props.location.pathname){
      case '/':
        sideBarWidth.push(classes['side-bar--width-medium']);
      break;

      case '/posts':
      sideBarWidth.push(classes['side-bar--width-small']);
      break;

      default:
      sideBarWidth.push(classes['side-bar--width-medium']);
      break;
    }
    return(
      <div className={sideBarWidth.join(' ')}>
        <div className={[classes['side-bar__content-box'],classes['row']].join(' ')}>
          {this.props.children}
        </div>
      </div>);
      }
}



export default withRouter(SideBar);
