import React from 'react';
import classes from './ContentBlock.module.scss';

const contentBlock = (props) => {
  let blockStyle = null;
  switch (props.type){

    case 'about':
    blockStyle = classes['block--about'];
    break;
    default:
    blockStyle = classes['block'];
    break;
  }
  return(
    <div className={blockStyle}>
      {props.children}
    </div>
  )
};

export default contentBlock;
