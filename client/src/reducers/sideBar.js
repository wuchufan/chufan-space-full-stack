import {
  CHECKSHOW
} from '../actions/types';

const initialState = {
  checkShow:false
}


export default function(state = initialState, action){
  const { type, payload } = action;

  switch (type){
    case CHECKSHOW:
    return {
      ...state,
      checkShow: payload
    }


    default:
    return state;
  }
}
