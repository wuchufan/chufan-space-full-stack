import React,{Component} from 'react';
import AboutHeader from './AboutHeader/AboutHeader';
import AboutContent from './AboutContent/AboutContent';
import Pages from '../../hoc/Pages/Pages';

class About extends Component{
  render(){
    return (
      <Pages>
        <AboutHeader/>
        <AboutContent/>

      </Pages>
    )
  }
}



export default About;
