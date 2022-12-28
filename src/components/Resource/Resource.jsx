import React, { useState } from 'react';
import Popup from './popup';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IoIosBookmark, IoIosEyeOff } from 'react-icons/io';
import { IoCreateOutline } from 'react-icons/io5';
import { HiBellAlert } from 'react-icons/hi2';
import { FiTarget } from 'react-icons/fi';
import {
  Container,
  LeftAside,
  MiddleAside,
  RightAside,
} from '../../styles/stylesResource';
export const Resource = (props) => {
  const [resourcePopup, setResourcePopup] = useState(true);

  const ocupations = [
    {
      logoUrl: null,
      title: 'Account Manager',
      name: 'Digital Room',
      address: 'Glendal, CA (On-site)',
      activelyRecruiting: true, // Actively recruiting
      isPromoted: true, // Promoted
    },
    {
      logoUrl: null,
      title: 'Account Manager',
      name: 'Digital Room',
      address: 'Glendal, CA (On-site)',
      activelyRecruiting: true, // Actively recruiting
      isPromoted: true, // Promoted
    },
    {
      logoUrl: null,
      title: 'Account Manager',
      name: 'Digital Room',
      address: 'Glendal, CA (On-site)',
      activelyRecruiting: true, // Actively recruiting
      isPromoted: true, // Promoted
    },
    {
      logoUrl: null,
      title: 'Account Manager',
      name: 'Digital Room',
      address: 'Glendal, CA (On-site)',
      activelyRecruiting: true, // Actively recruiting
      isPromoted: true, // Promoted
    },
  ];

  return (
    <Container>
      <LeftAside>
        <div className='leftT_box'>
          <div className='L_box'>
            <div className='L_logo'>
              <IoIosBookmark />
            </div>
            <div className='L_name'>My resources</div>
          </div>

          <div className='L_box' onClick={() => setResourcePopup(true)}>
            <div className='L_logo'>
              <HiBellAlert />
            </div>
            <div className='L_name'>resource Alert</div>
          </div>
        </div>

        {resourcePopup ? (
          <Popup
            resourcePopup={resourcePopup}
            setResourcePopup={setResourcePopup}
          />
        ) : (
          ''
        )}

        <div className='leftB_box'>
          <div className='LB_logo'>
            <IoCreateOutline />
          </div>
          <div className='B_name'>Post a free resource</div>
        </div>
      </LeftAside>

      <MiddleAside className='resource_middle'>
        <div className='middleT_div'>
          <div className='MTcontent'>
            <h1>Recent searches</h1>
            <h3>
              google <span className='green'>(1000 new)</span>
            </h3>
            <h5>Maine</h5>
          </div>
          <button className='clear_button'>Clear</button>
        </div>
        {/* ....................middle heading/........ */}
        <div className='middleM_div'>
          <h2>Recommended for you</h2>
          <p>Based on your profile and search history.</p>

          {ocupations.map(
            (
              { logoUrl, title, name, address, activelyRecruiting, isPromoted },
              i
            ) => {
              return (
                <div className='ocupation-card' key={`name${i}`}>
                  <div className='ocupation-card-logo'>
                    <img
                      src={logoUrl ? logoUrl : '/images/user.svg'}
                      alt={name}
                    />
                  </div>

                  <div className='ocupation-card-info'>
                    <h3>{title}</h3>
                    <span>{name}</span>
                    <span>{address}</span>
                    <div className='active_logo'>
                      <FiTarget color='#990000' />
                      <span>
                        {activelyRecruiting ? 'Actively recruiting' : ''}
                      </span>
                    </div>
                    <div className='content_bottom'>
                      <span>{isPromoted ? 'Promoted' : ''}</span>
                    </div>
                  </div>

                  <div className='actions-container'>
                    <div className='actions'>
                      <div className='icon-holder'>
                        <IoIosEyeOff className='hide' size={18} />
                      </div>
                      <div className='icon-holder'>
                        <DeleteOutlineIcon className='delete' size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </MiddleAside>

      <RightAside>
        <div className='RtopBox'>
          <div className='RTdiv'>
            <h1>resource seeker guidance</h1>
            <p>Recommended based on your activity</p>
          </div>

          <div className='RBdiv'>
            <p>Show more &#8594; </p>
          </div>
        </div>

        <div className='RbottomBox'>
          <span>
            About | Accessibility | Help Center | Privarcy & Terms ⮟ | Ad
            Choices | Advertising | Business Services ⮟ | Get the MaineRR app |
            More
          </span>

          <div className='RBlink'>
            <img src='/images/RRLogo.png' alt='' />
            <p> Maine Reentry Resources © 2022</p>
          </div>
        </div>
      </RightAside>
    </Container>
  );
};
