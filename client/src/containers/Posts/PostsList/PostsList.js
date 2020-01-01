import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import classes from './PostsList.module.scss';
import Button from '../../../components/UI/Button/Button';
import axios from 'axios';
import Pages from '../../../hoc/Pages/Pages';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class PostsList extends Component{

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

    componentDidMount(){

      // axios.get('/posts.json')
      // .then((response)=>{
      //
      //   const fetchedPosts = [];
      //   for (let fetchedPost in response.data){
      //
      //     fetchedPosts.push({...response.data[fetchedPost], key:fetchedPost});
      //   }
      //   this.setState({posts:fetchedPosts});
      // })
      // .catch((error)=>{
      //   console.log(error);
      //   this.setState({error:true});
      // });

      axios.get('/posts')
      .then((response)=>{
        console.log(response.data);
        const fetchedPosts = [];

        //response.data -> [{},{},...]
        for (let i = 0; i < response.data.length; i++){
          console.log(response.data[i]);
          fetchedPosts.push(response.data[i]);
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
          title={post.composeTitle}
          content={post.composeContent}
          key={post._id}
          clicked={()=>this.fullPostDirector(post._id)}/>)}
      ));
    }

    return(
            <Pages>
              <div>
                {posts}
                <div className={classes['post__button']}>
                  <Button action={this.newPostActionHandler} type='button'>New Post</Button>

                </div>
              </div>

            </Pages>
    );
  }
}

export default withErrorHandler(PostsList,axios);
