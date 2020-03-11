import {
  CHECKSHOW
} from './types';


export const checkShow = (event) => dispatch =>{

  let show = false;

  if (event.nativeEvent.clientX <= 20) show = true;

  dispatch({
    type:CHECKSHOW,
    payload:show
  })
};
