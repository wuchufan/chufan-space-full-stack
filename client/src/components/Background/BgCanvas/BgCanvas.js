import React,{ Component } from 'react';
import PureCanvas from './PureCanvas/PureCanvas';



class BgCanvas extends Component{


  saveContext=(ctx)=>{
    this.ctx = ctx;
  }

  getRndInteger=(min,max)=>{
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  drawCircle = (x,y,radius,color) =>{
    this.ctx.beginPath();
    this.ctx.arc(x,y,radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle =color;
    this.ctx.fill();
  };

  componentDidUpdate(){
    this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    const circleArray = this.props.circles;

    for (let i = 0; i<circleArray.length; i++){
      let circle = {...circleArray[i]};
      this.drawCircle(circle.x,circle.y,circle.radius,'rgba(190, 225, 239, 0.4)');
    }
  }


  render(){
    return (
      <PureCanvas

        height={window.innerHeight}
        width={window.innerWidth}
        contextRef={this.saveContext}
        test={this.test}/>

    )
  }
}

export default BgCanvas;
