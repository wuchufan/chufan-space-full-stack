import { combineReducers } from 'redux';
import sideBar from './sideBar';
import sendEmail from './sendEmail';

export default combineReducers({
  sideBar,
  sendEmail
})
