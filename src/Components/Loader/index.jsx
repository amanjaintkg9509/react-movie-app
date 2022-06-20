import React from 'react';
import { Spinner } from "react-bootstrap";

export default function index() {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner animation="border" role="status" style={{ width: '5rem', height: '5rem', padding:'50px',marginTop:'100px' }}></Spinner>
    </div>
  )
}
