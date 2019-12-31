import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Pages from '../..//hoc/Pages/Pages';
import classes from './CreatePost.module.scss';
import axios from '../../axios-instance';
import Aux from '../../hoc/Aux/Aux';

class CreatePost extends Component {
  state = {
    newPostForm: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Enter!'
        },
        value: ''
      },
      content: {
        elementType: 'textarea',
        elementConfig: {
          placeholder: 'Write!'
        },
        value: ''
      }
    }
  }

  inputChangedHandler=(event,inputIdentifier)=>{
    const updatedNewPostForm = {...this.state.newPostForm};
    const updatedNewPostFormElement = {...updatedNewPostForm[inputIdentifier]};
    updatedNewPostFormElement.value = event.target.value;
    updatedNewPostForm[inputIdentifier].value = updatedNewPostFormElement.value;
    this.setState({newPostForm:updatedNewPostForm});
  }

  submitHandler=(event)=>{
    event.preventDefault();
    const article ={
      title:this.state.newPostForm.title.value,
      content:this.state.newPostForm.content.value
    };
    axios.post('/posts.json',article)
    .then(response=>{
      this.props.history.push('/posts');
    })
    .catch(error=>{
      console.log(error);
    });

  }

  render() {
    const formElementsArray = [];
    for (let formElement in this.state.newPostForm) {
      formElementsArray.push({config: this.state.newPostForm[formElement], key: formElement});
    }

    const form = (
      <form onSubmit={this.submitHandler} className={classes.Form}>
        {formElementsArray.map((input) => (
          <Input
            key={input.key}
            elementConfig={input.config.elementConfig}
            elementType={input.config.elementType}
            inputChanged={(event)=>(this.inputChangedHandler(event,input.key))}
            value={input.config.value}>
            {input.key}:
          </Input>))}
        <div className={classes['Form__button']}>


          <Button type="btn">Submit</Button>
        </div>
    </form>);
    return (<Aux>
      <Pages>


        <div>
        {form}
      </div>
      </Pages>
    </Aux>);
  }
}

export default CreatePost;
