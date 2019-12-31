import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Pages from '../../hoc/Pages/Pages';
import 'katex/dist/katex.min.css';
import { BlockMath} from 'react-katex';
// InlineMath
import classes from './HomePage.module.scss';

class HomePage extends Component{

  render(){

    return(
      <Aux>
        <Pages>


          <div className={classes['row']}>

            <h1 className={classes['heading-secondary']}>
              The Great Master is currently working hard on expanding this universe.
            </h1>
            <div className={classes['heading-secondary']}>
              <BlockMath math="\nabla \cdot \vec{E}=\frac \rho {\epsilon_0}"/>
            </div>

        </div>
            </Pages>
      </Aux>

    );
  }
}

export default HomePage;
