import React from 'react';
import ReactDom from 'react-dom';
//import{createRoot} from 'react-dom/client';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

//const saludo=<h1>Hey world</h1>;//variable que crea un elemento html
const divRoot=document.querySelector('#app');
//const root=createRoot(divRoot);
//root.render(<CounterApp value={10}/>,divRoot);
ReactDom.render(<CounterApp value={10}/>,divRoot);
