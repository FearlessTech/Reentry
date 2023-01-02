import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  .elm {
    background-color: purple;
    width: 25px;
    height: 25px;
    border-radius: 100vmax;
    transition: 250ms cubic-bezier(0.83, 0.81, 0.36, 0.37);
  }
`;
