import React,{Component} from 'react';
import SideBar from '../../SideBar/SideBar';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './SideBarHomePage.module.scss';



class SideBarHomePage extends Component{


  render(){

  return(
      <SideBar>
        <div className={classes['home']}>

          <div className={classes['home__title']}>
            <h1 className={
              [classes['heading-primary'],
              classes['u-margin-bottom-medium']
              ].join(' ')}>

              <span className={
                [classes['home__title-span'],
                classes['heading-primary--main']]
                .join(' ')}>
                Greetings
              </span>
              <span className={
                [classes['home__title-span'],
                classes['heading-primary--sub']]
                .join(' ')}>
                traveler,
              </span>

            </h1>
          </div>
          <div className={classes['home__cat-words']}>
            <p className={classes['paragraph']}>
              <span>I'm meowster's cat!</span>
              <span>My name is Schrodinger, meow.</span>
              <span>Meowster is currently away from home.</span>
              <span>He told me to take care of the guests.</span>
              <span>So leave me the message so I can tell meowster!</span></p>
          </div>

          <div className={classes['home__message-box']}>
            <div className={classes['u-margin-bottom-medium']}>
              <Input elementType={'textarea'} className={'textarea--main'}/>
            </div>


            <Button type='text'>
              Leave a message meow!
            </Button>


          </div>
        </div>

      </SideBar>


    )
  }
}

export default SideBarHomePage;
