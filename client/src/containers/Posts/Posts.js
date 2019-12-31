import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import PostsList from './PostsList/PostsList';




class Posts extends Component{

  render(){


    return(
      <Switch>

        <Route path='/posts' exact component={PostsList}/>
        <Route path={this.props.match.url + '/:id'} component={FullPost}/>

      </Switch>
    );
  }
}

export default Posts;
