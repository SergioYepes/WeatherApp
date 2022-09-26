import React, { useEffect, useState } from 'react'
import Imput from '../input/imput';
import Loading from '../loading/Loading';
import WeatherCard from '../WeatherCard/WeatherCard';
import weatherA from "./weatherApp.module.css"

const {
  REACT_APP_APIKEY
}=process.env


function WeatherApp() {

    const[weather,setWeather]=useState(null);

    useEffect(()=>{
      loadInfo()
    },[])
    useEffect(()=>{
      document.title= `Weather | ${weather?.location.name ?? ""}`
    },[weather])

    async function loadInfo(city="bogota"){
      try {
        const request= await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${REACT_APP_APIKEY}&q=${city}&aqi=no`
          )
         const json= await request.json()
         console.log(json);
          setWeather(json)
      } catch (error) {
        console.log(error);
      }
    }

    function handleChangeCity(city){
      setWeather(null)
      loadInfo(city)
    }


  return (
    <div className={weatherA.container}>
        <Imput onChCity={handleChangeCity}/> 
        {weather ? <WeatherCard weather={weather} /> : <Loading/>}      
         
    </div>
  )
}

export default WeatherApp