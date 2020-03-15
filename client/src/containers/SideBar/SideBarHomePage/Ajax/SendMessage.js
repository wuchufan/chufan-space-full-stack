import axios from 'axios';


export const sendMessage = async () =>{
  try{
    const post = await axios.get('/api/posts');
    console.log(post);
  }catch(err){
    console.log(err);
  }
}
