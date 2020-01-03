import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import Pages from '../../hoc/Pages/Pages';
import 'katex/dist/katex.min.css';
import classes from './HomePage.module.scss';

class HomePage extends Component{

  render(){

    return(
      <Aux>
        <Pages>


          <div className={classes['row']}>
            <section className={classes['home']}>
              <div className={classes['home__title']}>
                <h1 className={classes['home__title--heading']}>
                Hi, I'm <span className={classes['home__title--span']}>Chufan Wu.</span>
                </h1>
              </div>

              <div className={classes['home__message']}>

                <p className={classes['home__message--paragraph']}>

                  I'm a physics student graduated from University of Toronto.
                </p>
                <p className={classes['home__message--paragraph']}>
                  I'm currently away from home. I had imformed Schrodinger to take care of any incidants.
                  Please do make yourself comfortable, roam around, I have put my work in here.
                </p>
                <p className={classes['home__message--paragraph']}>
                  If you want to learn more about me, use this portal :)
                </p>
                <div className={classes['home__message--button']}>
                <NavLink to='/about'>
                  <Button type='text-2'>
                    About me &rarr;
                  </Button>
                </NavLink>
                </div>
              </div>
              <div className={classes['home__announcement']}>
                <h3 className={classes['home__announcememt--heading']}>Announcement:</h3>
                <p className={classes['home__announcement--content']}>
                  The Meowster is currently working hard on expanding this universe.
                </p>
              </div>

            </section>
          </div>
            </Pages>
      </Aux>

    );
  }
}

export default HomePage;
