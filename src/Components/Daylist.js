import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useWeather } from '../Context/WeatherContext'

function Daylist() {
    let { weatherData } = useWeather()

    return (
        <>
            <CardGroup>
                {
                    weatherData.map((item, index) => {
                         const date = new Date(item.date);
                         const dayNumber = date.getDay();
                         const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
                         const day = daysOfWeek[dayNumber]
                        return (
                            <Card key={index}>
                                <Card.Body>
                                    <Card.Title>{day}</Card.Title>
                                    <Card.Img variant='top' src={item.day.condition.icon}></Card.Img>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{item.day.maxtemp_c}*C {item.day.mintemp_c}*C</small>
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