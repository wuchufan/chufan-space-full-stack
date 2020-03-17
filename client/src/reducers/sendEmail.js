import {
  SEND_EMAIL_FAIL,
  SEND_EMAIL_SUCCESS,
  SENDING_EMAIL,
  REMOVE_ALERT
 } from '../actions/types';

const initialState = {
  isSuccess:null,
  sending:null,
  errorMessage:''
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case SENDING_EMAIL:
    return{
      ...state,
      sending:true
    }

    case SEND_EMAIL_FAIL:
    return{
      ...state,
      isSuccess:false,
      sending:false,
      errorMessage:payload
    }

    case SEND_EMAIL_SUCCESS:
    return{
      ...state,
      isSuccess:true,
      sending:false
    }

    case REMOVE_ALERT:
    return{
      ...state,
      sending:null,
      isSuccess:null,
      errorMessage:''
    }

    default:
    return state
  }
}
