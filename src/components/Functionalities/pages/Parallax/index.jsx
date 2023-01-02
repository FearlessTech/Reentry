import { useEffect, useRef } from 'react';
import { Container } from './styled';

const Parallax = (props) => {
  useEffect(() => {
    presetElements('elm', preset); // bird class here
    setListener('parallax'); // main container id here
  });

  return (
    <Container id='parallax'>
      <div className='elm' speed='5' />
      <div className='elm' speed='-5' />
      <div className='elm' speed='10' />
      <div className='elm' speed='-10' />
      <div className='elm' speed='7' />
      <div className='elm' speed='-7' />
      <div className='elm' speed='8' />
      <div className='elm' speed='-8' />
      <div className='elm' speed='5' />
      <div className='elm' speed='-9' />
      <div className='elm' speed='-2' />
      <div className='elm' speed='2' />
      <div className='elm' speed='4' />
      <div className='elm' speed='4' />
      <div className='elm' speed='-4' />
      <div className='elm' speed='8' />
      <div className='elm' speed='1' />
      <div className='elm' speed='-1' />
      <div className='elm' speed='6' />
      <div className='elm' speed='-6' />
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

  console.log(x, y);
  elm.style.setProperty('transform', `translate(${x}px, ${y}px)`);
}

function preset(elm) {
  elm.style.setProperty('top', `${randint(1, window.innerHeight)}px`);
  elm.style.setProperty('left', `${randint(1, window.innerWidth)}px`);
  // elm.setAttribute('speed', `${randint(-10, 10)}`);
}

function randint(min = 0, max) {
  return Math.floor(Math.random() * max + min);
}
