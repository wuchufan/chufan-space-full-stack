import React, {Component} from 'react';
// import classes from '../../../../sass/main.module.scss';
import classes from './PureCanvas.module.scss';

class PureCanvas extends Component{

  shouldComponentUpdate(){
    return true;
  }

  render(){
    return(
      <canvas
        className={classes['canvas']}
        width={this.props.width}
        height={this.props.height}
        ref={node =>node ? this.props.contextRef(node.getContext('2d')) : null}
      />
        )
  }
}
export default PureCanvas;
