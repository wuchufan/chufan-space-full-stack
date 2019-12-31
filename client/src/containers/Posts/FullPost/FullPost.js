import React, { Component } from 'react';
import Pages from '../../../hoc/Pages/Pages';


class FullPost extends Component{

  render(){
    console.log(this.props);
    return(
      <Pages>
        
        <div>
          <h1>this is fullpost page</h1>
        </div>
      </Pages>
    );

  }
}

export default FullPost;
