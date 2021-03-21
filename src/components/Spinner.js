import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default CustomSpinner;

function CustomSpinner () {
  return(
    <div className='text-center'>
      <Spinner animation="border" variant="secondary" />
    </div>
  );
}
