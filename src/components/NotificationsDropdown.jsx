import React, { useState } from 'react';
import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';

const StNotificationsDropDown = styled.div`
  .more {
    width: 16px;
  }
  .dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    background-color: #d7d7d7;
    padding: 3px;
    a {
      text-decoration: none;
      color: black;
      background-color: #c9c9c9;
    }
  }
`;

const NotificationsDropdown = ({ notifications, setNotifications, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <StNotificationsDropDown>
      <MoreHorizIcon onClick={(e) => setOpen(!open)} className='more' />
      {!open || (
        <div className='dropdown'>
          <Link
            to='#'
            onClick={(e) => {
              e.preventDefault();
              setNotifications(() => {
                const newNotifications = notifications.filter(
                  (notification) => notification.id !== id
                );
                return newNotifications;
              });
            }}
          >
            delete
          </Link>
          <Link to={`/notifications/report?id=${id}`}>report</Link>
        </div>
      )}
    </StNotificationsDropDown>
  );
};

export default NotificationsDropdown;
