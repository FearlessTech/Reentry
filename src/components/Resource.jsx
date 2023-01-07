import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IoIosBookmark, IoIosEyeOff, IoMdCloseCircle } from 'react-icons/io';
import { IoCreateOutline } from 'react-icons/io5';
import { HiBellAlert } from 'react-icons/hi2';
import { FiTarget } from 'react-icons/fi';
import {
  ResourceDiv,
  StyledLeftASide,
  LeftOptions,
  LeftBox,
  LeftLogo,
  LeftPostResource,
  LeftBName,
  LeftBLogo,
  StyledMiddleAside,
  StyledRecent,
  MTcontent,
  MiddleM,
  OcupationCard,
  OcupationCardLogo,
  OcupationCardInfo,
  ActiveLogo,
  ContentBottom,
  ActionsContainer,
  Actions,
  IconHolder,
  StyledRightAside,
  RTopBox,
  RT,
  RB,
  RBottomBox,
  RBLink,
} from '../styles/styledResource';
import { Link } from 'react-router-dom';

const Recent = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {!open || (
        <StyledRecent>
          <MTcontent>
            <h1>Recent searches</h1>
            <h3>
              google <span>(1000 new)</span>
            </h3>
            <span>Maine</span>
          </MTcontent>
          <IoMdCloseCircle
            size={25}
            color='#a5a5a5'
            onClick={() => {
              setOpen(!open);
            }}
          />
        </StyledRecent>
      )}
    </div>
  );
};

const Resource = (props) => {
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
    <ResourceDiv>
      <div className='main-container'>
        <StyledLeftASide>
          <LeftOptions>
            <LeftBox>
              <LeftLogo>
                <IoIosBookmark />
              </LeftLogo>
              <Link>My resources</Link>
            </LeftBox>

            <LeftBox>
              <LeftLogo>
                <HiBellAlert />
              </LeftLogo>
              <Link>resource Alert</Link>
            </LeftBox>
          </LeftOptions>

          <LeftPostResource>
            <LeftBLogo>
              <IoCreateOutline />
            </LeftBLogo>
            <LeftBName>Post a free resource</LeftBName>
          </LeftPostResource>
        </StyledLeftASide>

        <StyledMiddleAside>
          <Recent />
          {/* ....................middle heading/........ */}
          <MiddleM>
            <h2>Recommended for you</h2>
            <p>Based on your profile and search history.</p>
            <div className='cards'>
              {ocupations.map(
                ({
                  logoUrl,
                  title,
                  name,
                  address,
                  activelyRecruiting,
                  isPromoted,
                }) => {
                  return (
                    <OcupationCard key={name}>
                      <OcupationCardLogo>
                        <img
                          src={logoUrl ? logoUrl : '/images/user.svg'}
                          alt={name}
                        />
                      </OcupationCardLogo>

                      <OcupationCardInfo>
                        <h3>{title}</h3>
                        <span>{name}</span>
                        <span>{address}</span>
                        <ActiveLogo>
                          <FiTarget color='#990000' />
                          <span>
                            {activelyRecruiting ? 'Actively recruiting' : ''}
                          </span>
                        </ActiveLogo>
                        <ContentBottom>
                          <span>{isPromoted ? 'Promoted' : ''}</span>
                        </ContentBottom>
                      </OcupationCardInfo>

                      <ActionsContainer>
                        <Actions>
                          <IconHolder>
                            <IoIosEyeOff className='hide' size={18} />
                          </IconHolder>
                          <IconHolder>
                            <DeleteOutlineIcon className='delete' size={18} />
                          </IconHolder>
                        </Actions>
                      </ActionsContainer>
                    </OcupationCard>
                  );
                }
              )}
            </div>
          </MiddleM>
        </StyledMiddleAside>

        <StyledRightAside>
          <RTopBox>
            <RT>
              <h1>resource seeker guidance</h1>
              <p>Recommended based on your activity</p>
            </RT>

            <RB>
              <p>Show more &#8594; </p>
            </RB>
          </RTopBox>

          <RBottomBox>
            <span>
              About | Accessibility | Help Center | Privarcy & Terms ⮟ | Ad
              Choices | Advertising | Business Services ⮟ | Get the MaineRR app
              | More
            </span>

            <RBLink>
              <img src='/images/PRAIcon.png' alt='' />
              <p> Maine Reentry Resources © 2022</p>
            </RBLink>
          </RBottomBox>
        </StyledRightAside>
      </div>
    </ResourceDiv>
  );
};

export default Resource;
