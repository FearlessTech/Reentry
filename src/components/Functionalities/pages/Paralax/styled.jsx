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
    transition: 250ms cubic-bezier(.83,.81,.36,.37);

  }
`;
