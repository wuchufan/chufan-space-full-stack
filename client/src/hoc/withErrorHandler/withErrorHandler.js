import React,{Component} from 'react';
import Model from '../../components/UI/Model/Model';


const withErrorHandler=(WrappedComponent, axios)=>{

  return class extends Component {
    state={
      error:null
    }

    UNSAFE_componentWillMount (){
      this.reqInterceptor = axios.interceptors.request.use(req=>{
        this.setState({error:null});
        return req;
      },error=>{
        console.log('request error');
        return Promise.reject(error);
      });
      this.resInterceptor = axios.interceptors.response.use(res=>res, error=>{
        console.log('response error');
        this.setState({error:error});
      });
    }

    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }


    render(){
      return(
        <React.Fragment>

          <WrappedComponent {...this.props}/>
          <Model show={this.state.error}>{this.state.error? this.state.error.message: null}</Model>
        </React.Fragment>
      );
    }
  }
}

export default  withErrorHandler;
