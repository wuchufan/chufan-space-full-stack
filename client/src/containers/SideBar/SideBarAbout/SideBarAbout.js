import React from 'react';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../../components/NavBar/NavBar';



const sideBarLibrary=(props)=>{
  return(
    <SideBar>
      <h1>This is Tetris</h1>

      <NavBar/>
    </SideBar>

  )
}

export default sideBarLibrary;
