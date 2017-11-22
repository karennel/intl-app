import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'; 
import {BrowserRouter, Router, Route} from 'react-router-dom'; 

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'; 

import App from './App';

// const dataArray = [{name:"John", age:25}, {name="Mary", age:40}];

const store = configureStore(); 

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
            <div>
                <App/>
               {/* <Route exact path='/' component={App data={[{name:"John", age:25}, {name="Mary", age:40}]} /> */}
            </div>
    </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root'));
registerServiceWorker();
