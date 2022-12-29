import React from 'react';
import { Link } from 'react-router-dom';
import StyledNotFound from './fbStyles/styledNotFound';

const NotFound = () => {
  const error = {
    errorNumber: 404,
    errorMessage: 'This page was not found.',
  };
  return (
    <StyledNotFound>
      <div className='content'>
        <div className="text-content">
          <div className='error'>Error {error.errorNumber}</div>
          <div className='message'>{error.errorMessage}</div>
        </div>
        <Link className="go-to-home" to="/home" >
          go to Home
        </Link>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
