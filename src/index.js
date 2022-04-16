import React from 'react';
import  ReactDOM  from 'react-dom';

const saludo=<h1>Hey world</h1>;//variable que crea un elemento html
const divRoot=document.querySelector('#app');



ReactDOM.render(saludo,divRoot);