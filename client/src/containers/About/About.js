import React,{Component} from 'react';
// import AboutNavBar from './AboutNavBar/AboutNavBar';
// import AboutContent from './AboutContent/AboutContent';
import classes from './About.module.scss';
import Pages from '../../hoc/Pages/Pages';

class About extends Component{

  render(){
    return (
      <Pages>

        <section className={classes['section-about']}>
          <div className={classes['content']}>
            <h1>
              This is About
            </h1>
          </div>
        </section>
      </Pages>
    )
  }
}

export default About;
