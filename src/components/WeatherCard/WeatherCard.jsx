import React from 'react'

function WeatherCard({weather}) {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <img src={`http:${weather?.current.condition.icon}`}alt={weather?.current.condition.text} width="128" />
      </div>
      <div>
        <div>{weather?.current.temp_c}°</div>
        <div>{weather?.location.lat}</div>
      </div>
      <div>
      <iframe 
      title="map"
      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39283168683!2d${weather?.location.lon}!3d${weather?.location.lon}7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1664226199242!5m2!1ses!2sco`} 
      width="600" 
      height="450" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
     </iframe></div>
    </div>
  )
}

export default WeatherCard
