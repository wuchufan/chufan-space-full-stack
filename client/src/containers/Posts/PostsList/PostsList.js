import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import classes from './PostsList.module.scss';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-instance';
import testAxios from 'axios';
import Pages from '../../../hoc/Pages/Pages';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class Posts extends Component{

    state={
      posts:null,
      error:null
    }
    newPostActionHandler=()=>{
      this.props.history.push({
        pathname:'/createpost'});
    }

    fullPostDirector=(id)=>{
      this.props.history.push({pathname:this.props.match.url+'/'+id})
    }

    backEndTestHandler=()=>{
      testAxios.get('/test')
      .then((response)=>{
        console.log(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
    }

    componentDidMount(){
      console.log(this.props);
      axios.get('/posts.json')
      .then((response)=>{

        const fetchedPosts = [];
        for (let fetchedPost in response.data){

          fetchedPosts.push({...response.data[fetchedPost], key:fetchedPost});
        }
        this.setState({posts:fetchedPosts});
      })
      .catch((error)=>{
        console.log(error);
        this.setState({error:true});
      });
    }
  render(){
    let posts = this.state.error ? <p className={classes.Loading}>Posts cannot be loaded</p> : <p className={classes.Loading}>Posts are loading...</p>;
    if (this.state.posts){
      posts = (this.state.posts.map(post=>{

        return(
        <Post
          title={post.title}
          content={post.content}
          key={post.key}
          clicked={()=>this.fullPostDirector(post.key)}/>)}
      ));
    }

    return(
            <Pages>
              <div>
                {posts}
                <div className={classes['post__button']}>
                  <Button action={this.newPostActionHandler} type='button'>New Post</Button>
                  <Button action={this.backEndTestHandler} type='button'>Test</Button>
                </div>
              </div>

            </Pages>
    );
  }
}

export default withErrorHandler(Posts,axios);
