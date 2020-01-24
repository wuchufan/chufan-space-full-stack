import * as actionTypes from '../actions';


//This is to check whether should show aboutpage sidebar
const initialState = {
  checkShow:false
}

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case actionTypes.CHECKSHOW:
    let show = null;
    if (action.x <= 20){
      show = true;
    } else{
      show = false;
    }
    return {...state,
    checkShow:show}
    default:
    return state
  }
}

export default reducer;
