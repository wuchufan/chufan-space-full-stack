import React from 'react';
import SideBar from '../../SideBar/SideBar';
import SideBarLayout from '../../../components/SideBarLayout/SideBarLayout';



const sideBarLibrary=(props)=>{
  return(
    <SideBar>
      <SideBarLayout title='Library'>
        <p>
          <span>
            This is where meowster put his important notes.
          </span>
        </p>
      </SideBarLayout>
    
    </SideBar>

  )
}

export default sideBarLibrary;
