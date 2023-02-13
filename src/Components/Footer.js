import React from 'react'
import { useWeather } from '../Context/WeatherContext';

function Footer() {
    const {cities} = useWeather()

  return (
    <div>
        Footer
    </div>
  )
}

export default React.memo(Footer)