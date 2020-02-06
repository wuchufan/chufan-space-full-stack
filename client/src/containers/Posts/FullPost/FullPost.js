import React, { Component } from 'react';
import classes from './FullPost.module.scss';
import axios from 'axios';
import Pages from '../../../hoc/Pages/Pages';


class FullPost extends Component{

  state={
    loadedPost:null
  }

  componentDidMount(){
    this.loadData();
  }

  loadData=()=>{
    if(this.props.match.params.id){
      console.log(this.props.match.params.id,this.props);
      axios.get('/api/posts/' + this.props.match.params.id)
      .then((response)=>{;

        this.setState({loadedPost:response.data})
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  }

  render(){
    let post = <h1>Loading...</h1>;
    let postBody = null;
    if (this.state.loadedPost){
    postBody = [...this.state.loadedPost.publishBodyLB].map((el,index)=>{
        if (!el) return <br key={index}/>
        return(
          <p key={index}>{el}</p>
        )
      })

      post = (

        <div className={classes['full-post']}>
          <article className={classes['full-post__article']}>

            <h1 className={[classes['full-post__title']].join(' ')}>
              {this.state.loadedPost.publishTitle}
            </h1>
            {postBody}
          </article>
        </div>
      )
    }
    return(
      <Pages>
        {post}
      </Pages>
    );

  }
}

export default FullPost;
