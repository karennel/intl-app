import React, { Component } from 'react';

import HOCHeader from './headerHOC'; 
import HeaderAB from './headerAB'; 
//import HeaderCD from './headerCD'; 
import HeaderStyle from '../styles/header-style'; 

export default HOCHeader(HeaderAB); 