import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useWeather } from '../Context/WeatherContext';
function Dropdowns() {
  const {city,setCity,cities} = useWeather()
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {city}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          cities.map((item) =>{
            return <Dropdown.Item key={item.id} onClick={() =>setCity(item.name)}>{item.name}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default React.memo(Dropdowns)