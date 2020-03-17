import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessage } from '../../../actions/sendEmail';
import Input from '../../../components/UI/Input/Input';
import SideBar from '../../SideBar/SideBar';
import classes from './SideBarHomePage.module.scss';



class SideBarHomePage extends Component{
  state = {
    message:''
  }


  //handle 'enter' keypress
  keyDownHandler = (e) =>{
    if(e.keyCode === 13) this.sendMessageHandler(e);
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
    });
  }

  sendMessageHandler = (e) =>{
    e.preventDefault();

    this.props.sendMessage(this.state.message)

    this.setState({message:''});
  }


  render(){
  const { message } = this.state;
  const { isSuccess, sending, errorMessage} = this.props;
  const alertStyle = {visibility:'visible',opacity:'1', transform:'translateY(0)'}
  let alert =(<p className={classes['alert']}>Press 'Enter' to send</p>);
  if(message && !errorMessage){
    alert = (<p className={classes['alert']} style={{...alertStyle,transition:'all 0.35s ease'}}>
      Press 'Enter' to send
    </p>)
  } else if(errorMessage && !message && !sending){
    alert =<p className={classes['alert']} style={alertStyle}>{errorMessage}</p>
  } else if(sending && !message && !errorMessage){
    alert =<p className={classes['alert']} style={alertStyle}>Sending...</p>
  } else if(isSuccess && !message && !sending){
    alert =<p className={classes['alert']} style={alertStyle}>Message delivered!</p>
  }



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
          <form autoComplete='off' className={classes['message-form']} >
            <div className={classes['text-bar']}>
            <Input type='input' value={message} onKeyDown={(e)=>this.keyDownHandler(e)} onChange={(e)=>this.inputOnChangeHandler(e)} name='message' className={'sidebar-style'} placeholder='Send me a message!'/>
            <button onClick={(e)=>this.buttonOnClickHandler(e)} className={classes['clear-button']}>
              <svg className={classes['clear-button__icon']} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                <polygon fillRule="evenodd" points="3.874 3.874 -.526 3.874 -.526 7.017 3.874 7.017 3.874 11.418 7.017 11.418 7.017 7.017 11.418 7.017 11.418 3.874 7.017 3.874 7.017 -.526 3.874 -.526" transform="rotate(45 5.446 5.446)"/>
              </svg>
            </button>
            </div>
            <small >
            {alert}
            </small>
          </form>

        </div>
      </SideBar>


    )
  }
}

SideBarHomePage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
}

const mapStateToProps = state =>({
  errorMessage: state.sendEmail.errorMessage,
  isSuccess:state.sendEmail.isSuccess,
  sending:state.sendEmail.sending
})

export default connect(mapStateToProps, { sendMessage })(SideBarHomePage);
