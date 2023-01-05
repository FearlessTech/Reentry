import React, { useState } from 'react';
import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';

const StNotificationsDropDown = styled.div`
  .more {
    width: 16px;
    color: #757575;
  }
  .closespan {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
  }
  .dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    border-radius: 5px;
    background-color: #e6f4ff;
    hr {
      width: 100%;
    }
    a {
      background-color: #f0f8ff;
      text-decoration: none;
      padding: 10px;
      color: #505050;
      &:hover {
        background-color: #e3f2ff;
      }
    }
  }
`;

const NotificationsDropdown = ({ notifications, setNotifications, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <StNotificationsDropDown>
      <MoreHorizIcon onClick={(e) => setOpen(!open)} className='more' />
      {!open || (
        <>
          <div className='closespan' onClick={(e) => setOpen(!open)} />
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
        </>
      )}
    </StNotificationsDropDown>
  );
};

export default NotificationsDropdown;
