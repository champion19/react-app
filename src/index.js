import React from 'react';
import  ReactDOM  from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

//const saludo=<h1>Hey world</h1>;//variable que crea un elemento html
const divRoot=document.querySelector('#app');



ReactDOM.render(<CounterApp value={10}/>,divRoot);