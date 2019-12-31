import React from 'react';
import SideBar from '../../SideBar/SideBar';
import SideBarLayout from '../../../components/SideBarLayout/SideBarLayout';
// import classes from '../../../sass/main.module.scss';



const sideBarPosts=(props)=>{

  return(
    <SideBar>
      <SideBarLayout title='Posts'>
        <p>
          <span>
            This is where meowster posts his little articles.
          </span>
        </p>
      </SideBarLayout>

      
    </SideBar>

  )
}

export default sideBarPosts;
