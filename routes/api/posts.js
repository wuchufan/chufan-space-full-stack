const express = require('express');
const router = express.Router();
const Posts = require('../../models/post');

//@Route GET /api/posts
//@Desc Find all the posts
//@Access Public

router.get('/',async (req,res)=>{
  try{
    const posts = await Posts.find();
    res.json(posts.reverse());

  } catch(err){
    console.log(err);
    res.status(500).send('Server error: cannot find posts');
  }
});

//@Route GET /api/posts/:id
//@Desc Find all the posts
//@Access Public

router.get('/:id', async (req,res)=>{
  try{
    const post = await Posts.findOne({_id:req.params.id});
    const payload = {
          publishTitle: post.composeTitle,
          publishBodyLB: post.composeLBBody
      };
    res.json(payload);
  } catch(err){
    console.log(err);
    res.status(500).send('Server error: no post found');
  }
});

module.exports = router;
