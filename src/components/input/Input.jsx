import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}/>
    </form>
  )
}

export default Imput
