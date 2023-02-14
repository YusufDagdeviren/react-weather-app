import React from 'react'
import { Container } from 'react-bootstrap'
import Dropdowns from './Dropdowns'
import Daylist from './Daylist'
import Footer from './Footer'
function Contents() {
  return (
    <>
    <Container fluid="sm">
        <Dropdowns/>
        <Daylist/>
        <Footer/>
    </Container>
    </>
  )
}

export default React.memo(Contents)