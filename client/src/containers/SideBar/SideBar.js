import React,{Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import classes from './SideBar.module.scss';


class SideBar extends Component{



  render(){

    let sideBarStyle=[classes['side-bar']];
    let sideBarContentStyle = [classes['side-bar__content-box'],classes['row']];

    switch (this.props.location.pathname){
      case '/':
        sideBarStyle.push(classes['side-bar--width-small']);
      break;

      case '/about':
        sideBarStyle.push(
          classes['side-bar--width-nav-bar'],
          classes['side-bar__about']
      );
        sideBarContentStyle.push(
          classes['side-bar__content-box--about']
        );
      if (!this.props.show){
        sideBarStyle.push(classes['side-bar__about--not-show'])
      }

      break;

      case '/posts':
      sideBarStyle.push(classes['side-bar--width-small']);
      break;

      case '/posts/' + this.props.match.params.id:

      break;

      default:
      sideBarStyle.push(classes['side-bar--width-medium']);
      break;
    }
    return(
      <div className={sideBarStyle.join(' ')}>
        <div className={sideBarContentStyle.join(' ')}>
          {this.props.children}
        </div>
      </div>);
      }
}

const mapStateToProps = state => {
  return {
    show:state.ssb.checkShow
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps)
)(SideBar);
