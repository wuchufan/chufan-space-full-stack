import React, {Component} from 'react';
import NavBarItems from './NavBarItems/NavBarItems';
import {withRouter} from 'react-router-dom';
// import NavBrand from './NavBrand/NavBrand';
import classes from './NavBar.module.scss';

class NavBar extends Component {
  render(){
    let navBarStyle = [classes['NavBar']];
    switch (this.props.location.pathname){
      case '/about':
      navBarStyle.push(classes['NavBar--about']);
      break;
      default:
      break;
    }

    return(
      <React.Fragment>
        <nav className={navBarStyle.join(' ')}>
          <NavBarItems location={this.props.location.pathname}/>

        </nav>
      </React.Fragment>
    );
  }
}

export default withRouter(NavBar);
