import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import classes from './Layout.module.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Posts from '../../containers/Posts/Posts';
import HomePage from '../../containers/HomePage/HomePage';
import About from '../../containers/About/About';
import Library from '../../containers/Library/Library';
import CreatePost from '../../containers/CreatePost/CreatePost';
import transition from '../../sass/transitions/slide.module.scss';
import fade from '../../sass/transitions/fade.module.scss';
import SideBarHomePage from '../../containers/SideBar/SideBarHomePage/SideBarHomePage';
import SideBarPosts from '../../containers/SideBar/SideBarPosts/SideBarPosts';
import SideBarLibrary from '../../containers/SideBar/SideBarLibrary/SideBarLibrary';
import SideBarAbout from '../../containers/SideBar/SideBarAbout/SideBarAbout';
import Background from '../../components/Background/Background';


class Layout extends Component {

  render() {

    return (<React.Fragment>
      <div className={classes['background']}>
      <Background/>
      </div>
      <main className={classes['main']}>

        <Route render={({location}) => {
          return (<React.Fragment>
            {/* SideBar */}
            <TransitionGroup >
              <CSSTransition key={location.key} timeout={{
                  enter: 200,
                  exit: 300
              }} classNames={fade} unmountOnExit>

                <Switch location={location}>
                  <Route path='/about' exact component={SideBarAbout}/>
                  <Route path='/library' exact component={SideBarLibrary}/>
                  <Route path='/posts' exact component={SideBarPosts}/>
                  <Route path='/' exact component={SideBarHomePage}/>
                </Switch>

              </CSSTransition>
            </TransitionGroup>

            {/* Content Page */}
            <TransitionGroup >
              <CSSTransition key={location.key} timeout={{
                enter: 200,
                exit: 300
              }} classNames={transition} unmountOnExit>
                <Switch location={location}>
                  <Route path='/createpost' exact component={CreatePost}/>
                  <Route path='/library' exact component={Library}/>
                  <Route path='/about' exact component={About}/>
                  <Route path='/posts' component={Posts}/>
                  <Route path='/' exact component={HomePage}/>
                </Switch>

              </CSSTransition>
            </TransitionGroup>
          </React.Fragment>);
        }}/>

      </main>
    </React.Fragment>);
  }
}

export default Layout;
