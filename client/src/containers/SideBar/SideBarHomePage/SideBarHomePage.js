import React,{Component} from 'react';
import { sendMessage } from './SendMessage';
import Input from '../../../components/UI/Input/Input';
import SideBar from '../../SideBar/SideBar';
import classes from './SideBarHomePage.module.scss';



class SideBarHomePage extends Component{
  state = {
    message:''
  }

  inputOnChangeHandler = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  buttonOnClickHandler = (e) =>{
    e.preventDefault();
    this.setState({
      ...this.state,
      message:''
    })
  }

  sendMessageHandler = (e) =>{
      e.preventDefault();
      sendMessage();
  }

  render(){
  const { message } = this.state;
  return(
      <SideBar>
        <div className={classes['home']}>

          <div className={classes['home__title']}>
            <h1 className={`${classes['heading-primary']} ${classes['u-margin-bottom-medium']}`}>
              <span className={
                [classes['home__title-span'],
                classes['home__title-span--1']]
                .join(' ')}>
                Greetings
              </span>
              <span className={
                [classes['home__title-span'],
                classes['home__title-span--2']]
                .join(' ')}>
                traveler,
              </span>
            </h1>
          </div>
          <form autoComplete='off' className={classes['message-form']}>
            <div className={classes['text-bar']}>
            <Input type='input' value={message} onChange={(e)=>this.inputOnChangeHandler(e)} name='message' className={'sidebar-style'} placeholder='Send me a message!'/>
            <button onClick={(e)=>this.buttonOnClickHandler(e)} className={classes['clear-button']}>
              <svg className={classes['clear-button__icon']} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                <polygon fillRule="evenodd" points="3.874 3.874 -.526 3.874 -.526 7.017 3.874 7.017 3.874 11.418 7.017 11.418 7.017 7.017 11.418 7.017 11.418 3.874 7.017 3.874 7.017 -.526 3.874 -.526" transform="rotate(45 5.446 5.446)"/>
              </svg>
            </button>
            </div>
            <button className={classes['send-button']} onClick={(e)=>this.sendMessageHandler(e)}>asd</button>
          </form>
          <div className={classes['home__cat-words']}>
            <p className={classes['paragraph']}>
              <span>I'm meowster's cat!</span>
              <span>My name is Schrodinger, meow.</span>
              <span>Meowster is currently away from home.</span>
              <span>He told me to take care of the guests.</span>
              <span>So leave me the message so I can tell meowster!</span>
            </p>
          </div>

        </div>

      </SideBar>


    )
  }
}

export default SideBarHomePage;
