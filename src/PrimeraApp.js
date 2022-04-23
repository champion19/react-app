import React from 'react';
import PropTYypes from 'prop-types';
//import React, { Fragment } from 'react';
//FC
//componente
const PrimeraApp=({saludo,subtitulo })=>{
    
    return(
        <>
        <h1>{saludo}</h1>
         {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
         <p>{subtitulo}</p>
      </>
    
    );

}
PrimeraApp.propTYypes={
saludo:PropTYypes.string.isRequired
}


export default PrimeraApp;