import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux';
import mouseTracker from './store/reducers/mouseTracker';
import checkShow from './store/reducers/checkShow';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

const rootReducer = combineReducers({
  msm: mouseTracker,
  ssb: checkShow
});

const store = createStore(rootReducer);


const app = (
  <Provider store={store}>


    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
