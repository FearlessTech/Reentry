import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IoIosBookmark, IoIosEyeOff } from 'react-icons/io';
import { IoCreateOutline } from 'react-icons/io5';
import { HiBellAlert } from 'react-icons/hi2';
import { FiTarget } from 'react-icons/fi';
import {
  ResourceDiv,
  StyledLeftASide,
  LeftTBox,
  LeftBox,
  LeftLogo,
  LeftName,
  LeftBBox,
  LeftBName,
  LeftBLogo,
  StyledMiddleAside,
  MiddleT,
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
      <StyledLeftASide>
        <LeftTBox>
          <LeftBox>
            <LeftLogo>
              <IoIosBookmark />
            </LeftLogo>
            <LeftName>My resources</LeftName>
          </LeftBox>

          <LeftBox onClick='PesourcePopup()'>
            <LeftLogo>
              <HiBellAlert />
            </LeftLogo>
            <LeftName>resource Alert</LeftName>
          </LeftBox>
        </LeftTBox>

        <LeftBBox>
          <LeftBLogo>
            <IoCreateOutline />
          </LeftBLogo>
          <LeftBName>Post a free resource</LeftBName>
        </LeftBBox>
      </StyledLeftASide>

      <StyledMiddleAside>
        <MiddleT>
          <MTcontent>
            <h1>Recent searches</h1>
            <h3>
              google <span>(1000 new)</span>
            </h3>
            <h5>Maine</h5>
          </MTcontent>
          <button>Clear</button>
        </MiddleT>
        {/* ....................middle heading/........ */}
        <MiddleM>
          <h2>Recommended for you</h2>
          <p>Based on your profile and search history.</p>

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
            Choices | Advertising | Business Services ⮟ | Get the MaineRR app |
            More
          </span>

          <RBLink>
            <img src='/images/RRLogo.png' alt='' />
            <p> Maine Reentry Resources © 2022</p>
          </RBLink>
        </RBottomBox>
      </StyledRightAside>
    </ResourceDiv>
  );
};

export default Resource