import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classes from './Pages.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import { checkShow } from '../../actions/sideBar';


class Pages extends Component {

  mouseMoveAndCheck = (e) =>{
    this.props.checkShow(e);
  }


  render(){

    let pageStyle= [];
    let navBar = <NavBar/>;
    let contentStyle = [classes['pages__content']];


    //Styling component for different route
    switch (this.props.location.pathname){
      case '/':
        pageStyle.push(
        classes['pages--width-medium'],
        classes['pages__container']);

      break;

      case '/about':
        pageStyle.push(
          classes['pages--width-max'],
          classes['pages__container'],
          classes['pages__about']);

        navBar = null;
        contentStyle = [];
        break;

      case '/posts':
        pageStyle.push(
        classes['pages--width-large'],
        classes['pages__container']);

      break;

      case '/posts/' + this.props.match.params.id:
        pageStyle.push(
        classes['pages--width-max'],
        classes['pages__container']);

      break;

      default:
      pageStyle.push(
        classes['pages--width-medium'],
        classes['pages__container']
    );
      break;
    }

    return(
      <div className={pageStyle.join(' ')} onMouseMove={(e)=>this.mouseMoveAndCheck(e)}>
        <div className={classes['pages__container--inner']}>

          {navBar}
          <div className={contentStyle.join(' ')} >

            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
};


export default compose(
withRouter,
connect(null,{ checkShow }))(Pages);
