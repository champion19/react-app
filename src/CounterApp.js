import React,{useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value=10})=> {
    
    const[counter,setCounter] =useState(value);
    
    //Handle Add
    const handleAdd = ()=>{
        setCounter(counter+1);//opcion 1
        //setCounter((c)=> c+1); opcion 2
        
    }
    const handleSub=()=>{
        setCounter(counter-1);
    }

    const handlereset=()=>{
        setCounter(value);
    }

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>

    <button onClick={handleAdd}>+1</button>
    <button onClick={handlereset}>Reset</button>
    <button onClick={handleSub}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
    value:PropTypes.number
}

export default CounterApp;