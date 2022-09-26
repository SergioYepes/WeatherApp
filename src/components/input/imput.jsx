import React, { useState } from 'react'
import Input from './Input.module.css'

function Imput({onChCity}) {
    const [city,setCity]=useState("")
    function handleChange(e) {
        const value= e.target.value
        if(value!== ""){   
            setCity(value)
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        onChCity(city)
    }
  return (
    <form onSubmit={handleSubmit} className={Input.container}>
      <input type="text" onChange={handleChange} className={Input.input}/>
    </form>
  )
}

export default Imput
