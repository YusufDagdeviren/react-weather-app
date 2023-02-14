import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useWeather } from '../Context/WeatherContext'

function Daylist() {
    let { weatherData } = useWeather()
    return (
        <>
            <CardGroup className='text-center'>
                {
                    weatherData.map((item, index) => {
                         const date = new Date(item.date);
                         const dayNumber = date.getDay();
                         const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
                         const day = daysOfWeek[dayNumber]
                        return (
                            <Card bg={index===0 ? 'secondary':''} text={index===0 ? 'white':''} key={index}>
                                <Card.Body>
                                    <Card.Title>{day}</Card.Title>
                                    <img variant='top' src={item.day.condition.icon} alt="desc" style={{width:"50px"}}></img>
                                </Card.Body>
                                <Card.Footer>
                                    <small><b>{item.day.maxtemp_c}°C</b> {item.day.mintemp_c}°C</small>
                                </Card.Footer>
                            </Card>                         
                        )
                    })
                }
            </CardGroup>
        </>

    )
}

export default React.memo(Daylist)