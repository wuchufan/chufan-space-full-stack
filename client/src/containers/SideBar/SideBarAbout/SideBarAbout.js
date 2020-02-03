import React,{Component} from 'react';
import classes from './SideBarAbout.module.scss';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../../components/NavBar/NavBar';



class SideBarAbout extends Component{


  render(){
    return(
      <SideBar>
        <h1 className={classes['u-text-align-center']}>NavBar</h1>
        <NavBar/>
      </SideBar>

    )
  }

}

export default SideBarAbout;
