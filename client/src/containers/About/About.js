import React,{Component} from 'react';
import classes from './About.module.scss';
import AboutHeader from './AboutHeader/AboutHeader';
import AboutContent from './AboutContent/AboutContent';
import Pages from '../../hoc/Pages/Pages';

class About extends Component{
  render(){
    return (
      <Pages>
        <div className={classes['container']}>
        <AboutHeader/>
        <AboutContent/>
        </div>
      </Pages>
    )
  }
}



export default About;
