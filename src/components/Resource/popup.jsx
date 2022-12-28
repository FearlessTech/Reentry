import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PopupContainer } from '../../styles/stylesPopup';

const Popup = ({ resourcePopup, setResourcePopup }) => {
  const [resourceAlerts, setResourceAlerts] = useState([
    {
      name: 'Resources',
      zone: 'Maine',
      freq: 'Daily',
      methods: ['email', 'notification'],
      id: 'rec1',
    },
    {
      name: 'Resource at India',
      zone: 'India',
      freq: 'Daily',
      methods: ['email', 'notification'],
      id: 'rec2',
    },
  ]);

  return (
    <PopupContainer>
      <div className='top'>
        <p>Resource alerts</p>
        <AiOutlineCloseCircle
          onClick={() => {
            setResourcePopup(false);
          }}
        />
      </div>
      <hr />
      <div className='content'>
        {resourceAlerts.map(({ name, zone, freq, methods, id }, i) => {
          return (
            <React.Fragment key={`${name}${i}`}>
              <div className='subContent'>
                <div className='leftCon'>
                  <h4>{name}</h4>
                  <div className='location'>
                    <span className='zone'>{zone}</span>
                  </div>
                  <div className='methods'>
                    {methods.map((method) => {
                      return <span className='method'>{method}</span>;
                    })}

                    <span className='freq'>{freq}</span>
                  </div>
                  <label htmlFor={`${name}${i}`} className='get-notified'>
                    <input
                      type='checkbox'
                      name={`${name}${i}`}
                      id={`${name}${i}`}
                    />
                    <span>Get notified of similar Resources</span>
                  </label>
                </div>
                <div className='rightCon'>
                  <img
                    src='https://cdn-icons-png.flaticon.com/128/1659/1659682.png'
                    alt=''
                  />
                  <img
                    src='https://cdn-icons-png.flaticon.com/128/1345/1345823.png'
                    alt=''
                    onClick={() => {
                      resourceAlerts.find((element) => element.id === id);
                      const newResources = resourceAlerts.filter(
                        (element) => element.id !== id
                      );
                      setResourceAlerts(newResources);
                    }}
                  />
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
      <div className='bottom'>
        <div className='leftB'>
          <h4>Resources recommendations</h4>
          <h6>
            Based on your Resources alerts, activity, and profile.{' '}
            <span className='learn-more'>Learn more.</span>{' '}
          </h6>
        </div>
        <div className='rightB'>
          <label class='switch'>
            <input type='checkbox' />
            <span class='slider round'></span>
          </label>
        </div>
      </div>
      <button>Done</button>
    </PopupContainer>
  );
};

export default Popup;
