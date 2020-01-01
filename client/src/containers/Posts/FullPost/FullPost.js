import React, { Component } from 'react';
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
      // console.log(this.props.match.params.id);
      axios.get(this.props.match.params.id)
      .then((response)=>{
        console.log(response.data);
        this.setState({loadedPost:response.data})
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }

  render(){
    let post = <h1>Loading...</h1>;
    let postBody = null;
    if (this.state.loadedPost){
    console.log(this.state.loadedPost.publishBodyLB);
    postBody = [...this.state.loadedPost.publishBodyLB].map((el,index)=>{
        if (!el) return <br/>
        return(
          <p key={index}>{el}</p>
        )
      })

      post = (
        <div>
          <h1>
            {this.state.loadedPost.publishTitle}
          </h1>
          
          {postBody}

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
