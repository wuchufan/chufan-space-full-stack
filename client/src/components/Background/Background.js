import React,{ Component } from 'react';
import BgCanvas from './BgCanvas/BgCanvas';
import {circleConstructor} from './BgCanvas/Circle/Circle';

//gives the number of circles
const CIRCLE = circleConstructor(80);

class Background extends Component{
  state = {
    circles: CIRCLE
  }


  componentDidMount(){
    this.rFA = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState=()=>{

    this.setState(
      prevState=>{

      let updatedCircles =[...prevState.circles];
      for (let i = 0; i < updatedCircles.length;i++){
        if (updatedCircles[i].x + updatedCircles[i].radius > window.innerWidth || updatedCircles[i].x < updatedCircles[i].radius) {
          updatedCircles[i].dx = -updatedCircles[i].dx;

        }
        if (updatedCircles[i].y + updatedCircles[i].radius > window.innerHeight || updatedCircles[i].y < updatedCircles[i].radius) {
          updatedCircles[i].dy = -updatedCircles[i].dy;

        }
        updatedCircles[i].x += updatedCircles[i].dx;
        updatedCircles[i].y += updatedCircles[i].dy;

      }

      return updatedCircles;

    }
  );

    this.rFA = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.rFA);
  }

  render(){
    return (

      <BgCanvas
        circles={this.state.circles}
      />
    )
  }
}

export default Background;
