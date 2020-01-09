import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './Pages.module.scss';
import NavBar from '../../components/NavBar/NavBar';

class Pages extends Component {

  render(){
    let pageStyle= [];
    let navBar = <NavBar/>;
    let contentStyle = [classes['pages__content']];



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
      <div className={pageStyle.join(' ')}>
        <div className={classes['pages__container--inner']}>
          {navBar}
          {/* <NavBar/> */}
          <div className={contentStyle.join(' ')} >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(Pages);
