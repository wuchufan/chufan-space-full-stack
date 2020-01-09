import React,{Component} from 'react';
// import AboutNavBar from './AboutNavBar/AboutNavBar';
// import AboutContent from './AboutContent/AboutContent';
import classes from './About.module.scss';
import Pages from '../../hoc/Pages/Pages';

class About extends Component{
  state={
    mouse:{
      x:0,
      y:0
    }
  }

  onMouseMove = (e) =>{
    this.setState({mouse:
      { x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY}
    });
  }

  render(){
    return (
      <Pages>
        <section className={classes['section-about']} onMouseMove={(e)=>this.onMouseMove(e)}>
          <div className={classes['content']}>
            <h1>
              This is about
            </h1>
            <h1>
              Mouse coordinate:{this.state.mouse.x},{this.state.mouse.y}
            </h1>
          </div>
        </section>
      </Pages>
    )
  }
}

export default About;
