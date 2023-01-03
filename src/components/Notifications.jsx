import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  Container,
  Left,
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
      <div className='container'>
        <Left>
          <div>
            <h1>Notifications</h1>
            <p>You have new notifications</p>
          </div>
          <hr />
          <div>
            <h1>View settings</h1>
            <p>Improve your notifications</p>
          </div>
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
                <Dots>
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
              <p>Ad</p> <MoreHorizIcon />
            </Ads>
            <p>100 years of Japanese innovation built to meet all your needs</p>
            {/* <RightImg>
            </RightImg> */}
            <hr />
            <p>A powerhouse for all your printing needs!</p>
            <button> Follow</button>
          </RTopDiv>
          <RBottomBox>
            <span>
              About | Accessibility | Help Center | Privarcy & Terms ⮟ | Ad
              Choices | Advertising | Business Services ⮟ | Get the MaineRR app
              | More
            </span>

            <RBLink>
              <img src='/images/RRLogo.png' alt='' />
              <p> Maine Reentry Resources © 2022</p>
            </RBLink>
          </RBottomBox>
        </Right>
      </div>
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
