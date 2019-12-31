import React,{Component} from 'react';
import classes from './Model.module.scss';

class Model extends Component {


  render(){
    let modelClasses = [classes.Model];
    if(this.props.show){

      modelClasses.push(classes.ModelShow);
    } else{
      modelClasses.push(classes.ModelNotShow)
    }
    return(
      <div className={modelClasses.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}



export default Model;
