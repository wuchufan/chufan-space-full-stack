import axios from 'axios';
import {
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
  SENDING_EMAIL,
  REMOVE_ALERT
} from './types';


export const sendMessage = (message, timeout=3000) => async dispatch =>{
  try{
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }

    dispatch({
      type:SENDING_EMAIL
    });

    await axios.post('/api/send-email', JSON.stringify({message}),config);

    dispatch({
      type:SEND_EMAIL_SUCCESS
    });
    setTimeout(()=>dispatch({type:REMOVE_ALERT}),timeout);

  }catch(err){

    dispatch({
      type:SEND_EMAIL_FAIL,
      payload:err.response.data.msg
    });
    setTimeout(()=>dispatch({type:REMOVE_ALERT}),timeout);
  }
}
