import { useEffect, useRef } from 'react';
import { Container } from './styled';

const Parallax = (props) => {
  useEffect(() => {
    presetElements('elm', preset);
    setListener('parallax');
  });

  return (
    <Container id='parallax'>
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
      <div className='elm' />
    </Container>
  );
};

export default Parallax;

function presetElements(className, lambda) {
  const birds = document.getElementsByClassName(className);
  for (let elm of birds) {
    lambda(elm);
  }
}

function setListener(className) {
  const parallaxContainer = document.getElementById(className);
  parallaxContainer.addEventListener('mousemove', (e) => {
    const birds = document.getElementsByClassName('elm');
    for (let elm of birds) {
      move(elm, e);
    }
  });
}

function move(elm, event) {
  const speed = elm.getAttribute('speed');
  const x = (window.innerWidth - event.pageX * speed) / 100;
  const y = (window.innerHeight - event.pageY * speed) / 100;

  elm.style.setProperty('transform', `translate(${x}px, ${y}px)`);
}

function preset(elm) {
  elm.style.setProperty('top', `${randint(1, window.innerHeight)}px`);
  elm.style.setProperty('left', `${randint(1, window.innerWidth)}px`);
  elm.setAttribute('speed', `${randint(3, 10)}`);
}

function randint(min = 0, max) {
  return Math.floor(Math.random() * max + min);
}

