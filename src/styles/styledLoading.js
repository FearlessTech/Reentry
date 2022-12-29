import styled from 'styled-components';

const StyledLoading = styled.div`
  width: 99%;
  overflow: hidden;
  height: 99%;
  position: absolute;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, Roboto, 'Open Sans', sans-serif;
  font-size: 7rem;
  font-weight: 700;
  color: #88bbd6;

  .dots {
    display: flex;
    justify-content: center;
  }
  .dot {
    animation-name: simpleDots;
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    transition: ease-in-out;
    width: 4.5rem;
    height: 1rem;
    margin-top: .4rem;
  }

  .dot1 {
    border-radius: 100vmax 0 0 100vmax;
    animation-delay: 0s;
  }
  .dot2 {
    animation-delay: 0.1s;
  }
  .dot4 {
    animation-delay: 0.2s;
  }
  .dot5 {
    animation-delay: 0.3s;
  }
  .dot6 {
    border-radius: 0 100vmax 100vmax 0;
    animation-delay: 0.4s;
  }

  @keyframes simpleDots {
    20% {
      background-color: #cbdfea;
    }
    40% {
      background-color: #cbdfea;
    }
    60% {
      background-color: #98b9cc;
    }
    80% {
      background-color: #7aa6bf;
    }
    87% {
      background-color: #98b9cc;
    }
    93% {
      background-color: #cbdfea;
    }
  }
`;

export default StyledLoading;
