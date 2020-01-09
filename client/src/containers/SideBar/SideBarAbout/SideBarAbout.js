import React,{Component} from 'react';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../../components/NavBar/NavBar';



class SideBarAbout extends Component{


  render(){
    return(
      <SideBar>


        <h1>This is NavBar</h1>

        <NavBar/>

      </SideBar>

    )
  }

}

export default SideBarAbout;
