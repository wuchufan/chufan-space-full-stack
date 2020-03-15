import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const input=(props)=>{
  let inputElement=null;
  // console.log(classes);
  // if(!props.className){
  //   console.log('no props');
  // }
  switch (props.type){
    case('input'):
    inputElement=<input value={props.value} className={classes.InputElement + ' ' + classes[props.className]} style={props.style} onChange={props.onChange} {...props.elementConfig}  name={props.name} placeholder={props.placeholder}/>;
    break;
    case('textarea'):
    inputElement=<textarea placeholder={props.placeholder} value={props.value} className={classes.InputElement + ' ' + classes[props.className]} onChange={props.onChange} {...props.elementConfig}  name={props.name}/>;
    break;
    default:
    inputElement=<input value={props.value} className={classes.InputElement + ' ' + classes[props.className]} onChange={props.onChange} {...props.elementConfig} name={props.name}/>;
    }
    return(
      <Fragment>
        <label className={classes['Label']}>{props.children}</label>
        {inputElement}
      </Fragment>
    );
  }

input.propTypes = {
  type:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  placeholder:PropTypes.string,
  value:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired
}



export default input;
