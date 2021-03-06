import React,{Component} from 'react';
import Button from '../../components/UI/Button/Button';
import Pages from '../../hoc/Pages/Pages';
import classes from './HomePage.module.scss';

class HomePage extends Component{

  buttonOnClick = () =>{
    this.props.history.push({pathname:'/about'});
  }

  render(){
    return(
      <React.Fragment>
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

                  I'm a physics specialist graduated from University of Toronto.
                </p>
                <p className={classes['home__message--paragraph']}>
                  I created this space to share inspiration and perhaps keep track of the trajectory of my journey in life.
                </p>
                <p className={classes['home__message--paragraph']}>
                  I'm currently away from home, but I've told Schrodinger to take care of any incidants.
                </p>
                <p className={classes['home__message--paragraph']}>
                  Roam around, and make yourself comfortable, I've put my work in here. If you want to learn more about me, take this portal :)
                </p>
                <div className={classes['home__message--button']}>
                    <Button type='text-2' action={this.buttonOnClick}>
                      About me &rarr;
                    </Button>
                </div>
              </div>
              <div className={classes['home__announcement']}>
                <figure className={classes['home__announcemen--image']}>

                </figure>
                <div className={classes['home__announcement--text']}>
                  <h3 className={classes['home__announcememt--heading']}>What's new:</h3>
                  <p className={classes['home__announcement--content']}>
                    Meowster is currently working hard on expanding this universe. He is looking for ideas on what to add. Tell me by leaving a message, meow!
                  </p>
                  <p className={classes['home__announcement--content']}>
                    Huge refactoring and functionality implementation coming in soon!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </Pages>
      </React.Fragment>

    );
  }
}

export default HomePage;
