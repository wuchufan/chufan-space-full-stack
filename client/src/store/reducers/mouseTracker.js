import * as actionTypes from '../actions';

const initialState = {
  x:0,
  y:0,

};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.MOUSEMOVE:
    return {...state,
      x:action.event.nativeEvent.offsetX,
      y:action.event.nativeEvent.offsetY}
    default:
    return state
  }
}

export default reducer;
