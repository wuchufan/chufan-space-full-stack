import React,{Component} from 'react';
import classes from './Items.module.scss';
import Item from './Item/Item';

class Items extends Component{

  render(){
    return(
      <ul>
      <Item>Detail</Item>
      </ul>
    )
  }
};

export default Items;
