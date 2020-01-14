import React,{Component} from 'react';
import { connect } from 'react-redux';
import classes from './About.module.scss';
import Pages from '../../hoc/Pages/Pages';

class About extends Component{
  render(){
    return (
      <Pages>
        <section className={classes['section-about']}>
          <div className={classes['content']}>
            <h1>
              This is about
            </h1>
            <h1>
              Mouse coordinate:{this.props.x},{this.props.y}
            </h1>
          </div>
        </section>
      </Pages>
    )
  }
}

const mapStateToProps = state =>{
  return{
    x:state.msm.x,
    y:state.msm.y
  }
}

export default connect(mapStateToProps)(About);
