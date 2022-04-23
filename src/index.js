import React from 'react';
import  ReactDOM  from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

//const saludo=<h1>Hey world</h1>;//variable que crea un elemento html
const divRoot=document.querySelector('#app');



ReactDOM.render(<CounterApp value={10}/>,divRoot);