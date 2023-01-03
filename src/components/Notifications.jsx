import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  Container,
  Left,
  LeftDiv,
  HR,
  Middle,
  MiddleBoxes,
  MiddleContent,
  Dots,
  Right,
  RTopDiv,
  Ads,
  RightImg,
} from '../styles/stylesNotifications';
import { RBottomBox, RBLink } from '../styles/styledResource';
import { Link } from 'react-router-dom';
import NotificationsDropdown from './NotificationsDropdown';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      category: 'event',
      image: {
        url: 'https://randomuser.me/api/portraits/men/94.jpg',
      },
      prevMessage: 'Your job alert for USA',
      date: new Date(),
      id: '12345',
    },
    {
      category: 'event',
      image: {
        url: 'https://randomuser.me/api/portraits/women/75.jpg',
      },
      prevMessage: 'Your job alert for India',
      date: new Date(),
      id: '45612',
    },
    {
      category: 'event',
      image: {
        url: 'https://randomuser.me/api/portraits/men/94.jpg',
      },
      prevMessage: 'Your job alert for Germany',
      date: new Date(),
      id: '79564',
    },
    {
      category: 'event',
      image: {
        url: 'https://randomuser.me/api/portraits/women/75.jpg',
      },
      prevMessage: 'Your job alert for Mumbai',
      date: new Date(),
      id: '85236',
    },
  ]);

  return (
    <Container>
      <Left>
        <LeftDiv>
          <h1>Notifications</h1>
          <p>You have new notifications</p>
        </LeftDiv>
        <LeftDiv>
          <p>Improve your notifications</p>
          <h1>View settings</h1>
        </LeftDiv>
      </Left>

      <Middle>
        {notifications.map((notification) => {
          return (
            <MiddleBoxes key={notification.id}>
              <div className='img-wrapper'>
                <img src={notification.image?.url} alt='' />
              </div>
              <MiddleContent>
                <div className='prevMessage'>
                  <Link to={`/notifications/${notification.id}`}>
                    {notification.prevMessage}
                  </Link>
                </div>
                <div className='action'>
                  <Link to={`/notifications/${notification.id}`}>
                    {categoryText(notification.category)}
                  </Link>
                </div>
              </MiddleContent>
              <Dots >
                <NotificationsDropdown
                  notifications={notifications}
                  setNotifications={setNotifications}
                  id={notification.id}
                />
                <span className='time'>1d</span>
              </Dots>
            </MiddleBoxes>
          );
        })}
      </Middle>

      <Right>
        <RTopDiv>
          <Ads>
            {' '}
            <p>Ad</p> <MoreHorizIcon />
          </Ads>
          <p>100 years of Japanese innovation built to meet all your needs</p>
          <RightImg>
            <img
              className='circle'
              src='https://media-exp1.licdn.com/dms/image/C4E03AQHYRKYBeIM7Rg/profile-displayphoto-shrink_100_100/0/1642222680344?e=1651104000&v=beta&t=lJofr2NhWemgVoiK1h6bFuVVvteMebPllDY5FFsmHWk'
              alt=''
            />
            <img
              src='https://media-exp1.licdn.com/dms/image/C510BAQEUO8H0EBcAVQ/company-logo_100_100/0/1543490756062?e=1654128000&v=beta&t=ZrRrKqq3xAnO6z_2i_eDgcaxj9z19cBvszX6BqUzkMY'
              alt=''
            />
          </RightImg>
          <p>A powerhouse for all your printing needs!</p>
          <button> Follow</button>
        </RTopDiv>
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
      </Right>
    </Container>
  );
};

function categoryText(category) {
  switch (category) {
    case 'job':
      return 'see job oportunity';
    case 'connection':
      return 'connect';
    default:
      return 'view event';
  }
}

export default Notifications;
