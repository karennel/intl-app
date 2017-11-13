import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Route} from 'react-router-dom'; 

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
            <div>
               <Route exact path='/' component={App}/>
            </div>
    </BrowserRouter>
        
    ,
    document.getElementById('root'));
registerServiceWorker();
