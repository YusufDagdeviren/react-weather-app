import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {

  return(
    <MDBFooter bgColor='light' className='text-center text-lg-left mt-3'>
    <div className='text-center p-3 footer-color'>
      <b>by YusufDagdeviren</b> :{' '}
      <a className='text-dark' href='https://github.com/YusufDagdeviren'>
        github
      </a>
    </div>
  </MDBFooter>

  )
 
}
export default React.memo(Footer)