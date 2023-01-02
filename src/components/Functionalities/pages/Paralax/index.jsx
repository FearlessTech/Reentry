import { useRef } from 'react';
import { Container } from './styled';

const Paralax = (props) => {
  const elm = useRef('elm');

  function handleMouseMove(e) {
    const mouseWidth = e.clientX;
    const mouseHeight = e.clientY;

    const elmRect = elm.current.getBoundingClientRect();

    const onLeft = mouseWidth < elmRect.left;
    const onTop = mouseHeight < elmRect.top;

    const rateX = Math.round(getDistanceRate(mouseWidth, elmRect.left));
    const rateY = Math.round(getDistanceRate(mouseHeight, elmRect.top));

    const rate = distanceCalibrator(greater([rateX, rateY]));

    console.log(rate);

    elm.current.style.setProperty(
      'transform',
      `translate(${onLeft ? `-${rate}` : rate}px, ${
        onTop ? `-${rate}` : rate
      }px)`
    );
  }
  return (
    <Container onMouseMove={handleMouseMove}>
      <div className='elm' ref={elm} />
    </Container>
  );
};

export default Paralax;

function getDistanceRate(mousePos, elmPos) {
  if (mousePos < elmPos) return elmPos - mousePos;
  return mousePos - elmPos;
}

function greater(values) {
  return values.reduce((prev, curr, i) => {
    if (i === 0) return curr;
    if (curr > prev) return curr;
    else return prev;
  }, 0);
}

function distanceCalibrator(size) {
  return size / 50 + 7;
}

