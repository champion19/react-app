import React from 'react';
import  ReactDOM  from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

//const saludo=<h1>Hey world</h1>;//variable que crea un elemento html
const divRoot=document.querySelector('#app');



ReactDOM.render(<PrimeraApp/>,divRoot);