import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useWeather } from '../Context/WeatherContext';
function Dropdowns() {
  const {city,setCity,cities} = useWeather()
  return (
    <div className='header mt-4'>
      <Dropdown className='mb-3'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
       {`${city}\t`}
      </Dropdown.Toggle>

      <Dropdown.Menu className='scrollable-menu'>
        {
          cities.map((item) =>{
            return <Dropdown.Item key={item.id} onClick={() =>setCity(item.name)}>{item.name}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
    </div>
    
  )
}

export default React.memo(Dropdowns)