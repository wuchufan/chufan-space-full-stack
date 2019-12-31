import React, {Component} from 'react';
import NavBarItems from './NavBarItems/NavBarItems';
// import NavBrand from './NavBrand/NavBrand';
import classes from './NavBar.module.scss';

class NavBar extends Component {
  render(){
    return(
      <React.Fragment>

        <nav className={classes.NavBar}>

          <NavBarItems/>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
