import React from 'react';
import StyledLoading from '../styles/styledLoading';

const Loading = () => {
  return (
    <>
      <StyledLoading>
        <div>
          <span>Loading</span>
          <div className="dots">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
            <div className="dot dot4"></div>
            <div className="dot dot5"></div>
            <div className="dot dot6"></div>
          </div>
        </div>
      </StyledLoading>
    </>
  );
};

export default Loading;
