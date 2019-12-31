import axios from 'axios';

const instance = axios.create({
  baseURL:'https://my-space-ed432.firebaseio.com/'
});


export default instance;
