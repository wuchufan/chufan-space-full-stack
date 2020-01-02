import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import Pages from '../../hoc/Pages/Pages';
import 'katex/dist/katex.min.css';
// import { BlockMath} from 'react-katex';
// InlineMath
import classes from './HomePage.module.scss';

class HomePage extends Component{

  render(){

    return(
      <Aux>
        <Pages>


          <div className={classes['row']}>
            <section className={classes['home']}>
              <div className={classes['home__announcement']}>
                <h3 className={classes['heading-secondary']}>Announcement:</h3>
                <p>
                  The Meowster is currently working hard on expanding this universe.
                </p>
              </div>

              <div className={classes['home__main']}>
                <p>
                  Hi, I'm Chufan. I'm currently away from home. I had imformed Schrodinger to take care of any incidants.
                  Please do make yourself comfortable, roam around, I have put my work in here.
                </p>
                <p>
                  If you want to learn more about me. Use this portal :)
                </p>

                <NavLink to='/about'>
                  <Button type='text-2'>
                    About me &rarr;
                  </Button>
                </NavLink>


                {/* <div className={classes['heading-secondary']}>
                  <BlockMath math="\nabla \cdot \vec{E}=\frac \rho {\epsilon_0}"/>
                </div> */}
              </div>


            </section>
          </div>
            </Pages>
      </Aux>

    );
  }
}

export default HomePage;
