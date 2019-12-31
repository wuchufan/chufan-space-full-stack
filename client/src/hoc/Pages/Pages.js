import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './Pages.module.scss';
import NavBar from '../../components/NavBar/NavBar';

class Pages extends Component {

  render(){
    let pageWidth=[classes['pages__container']];

    switch (this.props.location.pathname){
      case '/':
        pageWidth.push(classes['pages--width-medium']);
      break;

      case '/posts':
      pageWidth.push(classes['pages--width-large']);
      break;

      default:
      pageWidth.push(classes['pages--width-medium']);
      break;
    }
    return(
      <div className={pageWidth.join(' ')}>
        <div className={classes['pages__container--inner']}>
          <NavBar/>
          <div className={classes['pages__content']}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(Pages);
