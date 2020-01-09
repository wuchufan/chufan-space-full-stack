import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './SideBar.module.scss';


class SideBar extends Component{


  render(){
    let sideBarWidth=[classes['side-bar']]
    let sideBarContentStyle = [classes['side-bar__content-box'],classes['row']]
    switch (this.props.location.pathname){
      case '/':
        sideBarWidth.push(classes['side-bar--width-medium']);
      break;

      case '/about':
        sideBarWidth.push(
          classes['side-bar--width-nav-bar'],
          classes['side-bar__about']
      );
        sideBarContentStyle.push(
          classes['side-bar__content-box--about']
        );
        break;

      case '/posts':
      sideBarWidth.push(classes['side-bar--width-small']);
      break;

      case '/posts/' + this.props.match.params.id:

      break;

      default:
      sideBarWidth.push(classes['side-bar--width-medium']);
      break;
    }
    return(
      <div className={sideBarWidth.join(' ')}>
        <div className={sideBarContentStyle.join(' ')}>
          {this.props.children}
        </div>
      </div>);
      }
}



export default withRouter(SideBar);
