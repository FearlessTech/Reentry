# This is a collaborators only file. It's not meant to be read by the public. 
It's a place to put notes and ideas that are too early to be in the public docs.
Please leave the date and your github handle in the notes so other collaborators can discuss the ideas with you.
You can leave messages here for yourself and others or inline with the code in the comments.

:1/1/23 4-Leafs-Code: The first two files are what is currently displayed for showcase purposes. The second two files 
are what I am working on. There is a bug in the second two files and once it is found we will have user to user private 
direct messaging. If you want to help me bug hunt, please copy the second two files into your own branch and test them. 
Update the code with inline comments of your thought, theories, and findings. Then copy and paste it back into the 
second two file spaces. Please leave a note under this one to let me know you worked on this so I can check it out.
Thank you for your time and all of your help.


---
## Placeholder Messaging Currently Active:

### Messaging.jsx  COPY ONLY DO NOT PASTE OVER THIS FILE 
```jsx
import {
  Container,
  Messengers,
  MessengersHeader,
  ActorsList,
  Messages,
  MessagesHeader,
  SelectedAct,
  Reply,
  ReplyText,
} from "../styles/stylesMessaging";

const Messaging = () => {
  return (
    <Container>
      <Messengers>
        <MessengersHeader>
          <h2>Users Messages</h2>
        </MessengersHeader>
        <ActorsList>
          Actors who messaged user
          <br/>
          <br/>
          When user clicks on an actor,
          the messages between the user
          and the actor will be displayed
          in the SelectedAct section and
          the Actors Name displayed
          in the MessagesHeader h2.
        </ActorsList>
      </Messengers>
      <Messages>
        <MessagesHeader>
          <h2>Messages from Actor</h2>
          <p>Icon click to delete</p>
        </MessagesHeader>
        <SelectedAct>
          Selected actors messages to user
        </SelectedAct>
        <Reply>
          <ReplyText></ReplyText>
          button to send reply
        </Reply>
      </Messages>
    </Container>
  );
};

export default Messaging;
```
### stylesMessaging.jsx  COPY ONLY DO NOT PASTE OVER THIS FILE
```jsx
import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  max-height: 100% ;
  display: flex;
  background-color: #CDCDCD;
  min-height: 100vh;
`;

const Messengers = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #e9e9e9;
  height: 85vh;
  margin-right: 20px;
  border-radius: 10px;
`;

const MessengersHeader = styled.div`
  display: flex;
  width: 87%;
  height: 10%;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
  border-radius: 10px;
`;

const ActorsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  width: 87%;
  height: 90%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #e9e9e9;
  height: 85vh;
  border-radius: 10px;
  
  
`;

const MessagesHeader = styled.div`
  display: flex;
  width: 96%;
  height: 10%;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
`;

const SelectedAct = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px ;
  margin-right: 20px;
  width: 96%;
  height: 65%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
`;

const Reply = styled.div`
  margin-bottom: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  width: 96%;
  height: 25%;
  background-color: #88bbd6;
  border-radius: 10px;
  display: flex;
`;

const ReplyText = styled.textarea`
  margin: 10px;
  width: 85%;
  height: 80%;
  background-color: #e9e9e9;
  border-radius: 10px;
`;

export {
  Container,
  Messengers,
  MessengersHeader,
  ActorsList,
  Messages,
  MessagesHeader,
  SelectedAct,
  Reply,
  ReplyText,
};
```
---


## New Messaging Work In Progress:

### Messaging.jsx    
Copy this file and paste it into your own branch to test it. Make inline comments and paste them back into this file.

```jsx
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import { getUserAuth } from '../actions';
import { db } from "../firebase";

import {
  Container,
  Messengers,
  MessengersHeader,
  ActorsList,
  Messages,
  MessagesHeader,
  SelectedAct,
  AllActMessages,
  Reply,
  ReplyText,
} from "../styles/stylesMessaging";

export function Messaging() {
  const [users, setUsers] = useState([]);
  const [receiverData, setReceiverData] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const user = getUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
          snapshot.docs.map((doc) => ({
            userId: doc.id,
            username: doc.data().username,
          }))
      );
    });
  }, []);

  useEffect(() => {
    if (receiverData) {
      db.collection("users")
          .doc(receiverData.userId)
          .collection("messages")
          .doc(user.uid)
          .collection("messages")
          .orderBy("timestamp", "asc")
          .onSnapshot((snapshot) => {
            setAllMessages(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
            );
          });
    }
  }, [receiverData, user.uid]);
  
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("users")
        .doc(receiverData.userId)
        .collection("messages")
        .doc(user.uid)
        .collection("messages")
        .add({
          message: chatMessage,
          timestamp: db.firestore.FieldValue.serverTimestamp(),
          username: user.displayName,
        });

    db.collection("users")
        .doc(user.uid)
        .collection("messages")
        .doc(receiverData.userId)
        .collection("messages")
        .add({
          message: chatMessage,
          timestamp: db.firestore.FieldValue.serverTimestamp(),
          username: user.displayName,
        });
    setChatMessage("");
  };
  const UsersComponent = (props) => {
    const handleToggle = (username, userId) => {
      props.setReceiverData({
        username: username,
        userId: userId,
      });
      props.navigate(`/messaging/${userId}`);
    };

    return (
      <ActorsList>
        {props.users.map((user) => {
          return (
            <ListItem disablePadding key={user.id}>
              <ListItemButton
                onClick={() => handleToggle(user.username, user.id)}
                selected={props.receiverData.userId === user.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText primary={user.username} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </ActorsList>
    );
  }
  
  return (
    <Container>
      <Messengers>
        <MessengersHeader>
          <h1>Messengers</h1>
          <p>Need a search Bar</p>
        </MessengersHeader>
        <UsersComponent
          users={users}
          receiverData={receiverData}
          navigate={navigate}
          setReceiverData={setReceiverData}
        />
      </Messengers>
      <Messages>
        <MessagesHeader>
          <h1>Messages</h1>
        </MessagesHeader>
        <SelectedAct>
          <h3>{receiverData?.username}</h3>
        </SelectedAct>
        <AllActMessages>
          {allMessages.map((message) => {
            return (
              <div key={message.id}>
                <p>
                  <span>{message.data.username}</span> {message.data.message}
                </p>
              </div>
            );
          })}
        </AllActMessages>
        <Reply>
          <ReplyText
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </Reply>
      </Messages>
    </Container>
  );
}


export default Messaging;

```

### stylesMessaging.jsx
Copy this file and paste it into your own branch to test it. Make inline comments and paste them back into this file.

```jsx
import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  max-height: 100% ;
  display: flex;
  flexDirection: row;
  flex: 1;
`;

const Messengers = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #e9e9e9;
  height: 85vh;
  margin-right: 20px;
  border-radius: 10px;
  flex: 0.2;
`;

const MessengersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 87%;
  height: 10%;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
  border-radius: 10px;
  padding: 5px;
`;

const ActorsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  width: 87%;
  height: 90%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #e9e9e9;
  height: 85vh;
  border-radius: 10px;
  flex: 0.8;
  margin: 10px;
`;

const MessagesHeader = styled.div`
  display: flex;
  width: 96%;
  height: 10%;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
`;

const SelectedAct = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px ;
  margin-right: 20px;
  width: 96%;
  height: 65%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
  padding: 5px;
  flex: 1;
`;

const AllActMessages = styled.div`
  margin: 2px;
  display: flex;
  span {
    background-color: #BB8FCE;
    padding: 6px;
    border-bottom-left-radius: 10;
    border-bottom-right-radius: 10;
    max-width: 80%;
    font-size: 15px;
  }
`;

const Reply = styled.div`
  margin-bottom: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  width: 96%;
  height: 25%;
  background-color: #88bbd6;
  border-radius: 10px;
  display: flex;
  flex: 0.08;
`;

const ReplyText = styled.textarea`
  margin: 10px;
  width: 85%;
  height: 80%;
  background-color: #e9e9e9;
  border-radius: 10px;
  flex: 1;
  outline: none;
  border: none;
`;

export {
  Container,
  Messengers,
  MessengersHeader,
  ActorsList,
  Messages,
  MessagesHeader,
  SelectedAct,
  AllActMessages,
  Reply,
  ReplyText,
};

```
