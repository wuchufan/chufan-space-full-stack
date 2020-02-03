import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './MajorArticle.module.scss';

const majorArticle = (props) =>{

  const blogDirectHandler = () =>{
    props.history.push({pathname:'/posts/5e3686064359f900047e1232'})
  }
  return (
    <React.Fragment>
      <h1 className={classes['u-margin-bottom-small']}>What do I think of my education</h1>
      <p>tl;dr: the second last paragraph</p>

      <p>My physics education gave the deepest insight into nature. Starting from <span className={classes['u-italic']}>Classical mechanics</span>, which introduces the basics mathematical formalism into physics, I consequently learnt about <span className={classes['u-italic']}>Electromagetism</span>, <span className={classes['u-italic']}>Thermal physics </span> and
      <span className={classes['u-italic']}> Quantum mechancis</span>. Moreover, I also took the experimental physics courses, in which I conducted numerous physics experiements. Those I found particulary impressive are <a className={classes['link']} href='https://www.physics.utoronto.ca/~phy224_324/experiments/millikan-oil/millikan2.pdf'> Millikan oil drop experiment</a> (where you have to use the electric field to balance the net force of the oil drop, in order to find out the electric charge), <a className={classes['link']} href="https://www.physics.utoronto.ca/~phy224_324/experiments/gravity/GRAVITY-of-the-EARTH.pdf">Radius of the Earth</a> (where you will use a very sensitive, and expensive equipment (about $16,000 each) to measure the g constant of gravity), and so many more. From these courses, I've learnt to use Python to do data analysis, and to explain the results by applying theoretical physics theories.</p>

      <p>In my third and fourth year of study, I started to learn about new topics that are developed based on the subject described above, such as nuclear physics, high energy physics, and general relativity. These courses are the next level in terms of mathematics complexity, but I enjoyed them a lot when I was studying.</p>

      <p>I've also conducted a full year physics research project <span className={classes['u-italic']}> The Search for New Physics in Top Quark Pair Production</span> supervised by <a className={classes['link']} href="https://sites.physics.utoronto.ca/pekkasinervo">Professor Pekka Sinervo</a> in my 4th year. The goal of the project is to find three different subatomic particles suggested by three theories beyond the standard model. During this project I've used C/C++ to code up the algorithm and use statistical technique such as hypothesis test to analyze the results.</p>

      <p>The benefits of choosing physics as my undergraduate degree are plentiful. First of all, it equips me with rigourous mathematics and the ability to understand abstract concepts, which I consider hard to obtain after graduation. It also forces me to come out with methodologies to understand the essence of subjects and consequently solve difficult problems. These are the skills I consider very valuable. And these are the skills that enable me to have accomplishment in different fields, such as web development, after my graduation.</p>
      <p>I have a post on similar topic in my blog page, take the portal <span onClick={blogDirectHandler} className={classes['to-post']}>here</span> :)</p>


    </React.Fragment>
  )
}

export default withRouter(majorArticle);
