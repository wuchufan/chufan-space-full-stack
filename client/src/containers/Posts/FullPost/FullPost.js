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
    let post = <h1>Loading...</h1>
    if (this.state.loadedPost){
      post = (
        <div>
          <h1>
            {this.state.loadedPost.title}
          </h1>
          <p>
            {this.state.loadedPost.content}
          </p>
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
