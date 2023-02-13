import React from 'react'
import {Card,CardGroup} from'react-bootstrap'
import { useWeather } from '../Context/WeatherContext'

function Daylist() {
    let {cities,weatherData} = useWeather()
  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Wed</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Thu</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Fri</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Sat</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Sun</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Mon</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Tue</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Tue</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">78*C 67*C</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  )
}

export default React.memo(Daylist)