import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";

import { db, auth } from "../firebase";
import firebase from "firebase";

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

function UsersComponent(props) {
  const handleToggle = (username, userId) => {
    props.setReceiverData({
      username: username,
      userId: userId,
    });
    props.navigate(`/messaging/${userId}`);
  };

  return (
      <List>
        {props.users?.map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`;

          if (props.currentUserId !== value.userId)
            return (
                <ListItem key={value.userId} disablePadding>
                  <ListItemButton
                      onClick={() => {
                        handleToggle(value.username, value.userId);
                      }}
                  >
                    <ListItemAvatar>
                      <Avatar
                          alt={`${value.username}`}
                          src={`${value.username}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId}
                                  primary={`${value.username}`} />
                  </ListItemButton>
                </ListItem>
            );
        })}
      </List>
  );
}

export function Messaging() {
  const [users, setUsers] = useState([]);
  const [receiverData, setReceiverData] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);
  useEffect(() => {
    if (receiverData?.userId) {
      db.collection('messages').doc(receiverData?.userId)
        .onSnapshot(snapshot => (
          setRoomName(snapshot.data().name)
        ));
      db.collection('rooms').doc(roomId).
      collection("messages").orderBy('timestamp','asc')
        .onSnapshot((snapshot) => (
          setMessages(snapshot.docs.map((doc) =>
            doc.data()))
        ));
    }
  }, [receiverData?.userId])

    if (receiverData) {
      const unsub = onSnapshot(
          query(
              collection(
                  db,
                  "users",
                  user?.uid,
                  "chatUsers",
                  receiverData?.userId,
                  "messages"
              ),
              orderBy("timestamp")
          ),
          (snapshot) => {
            setAllMessages(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  messages: doc.data(),
                }))
            );
          }
      );
      return unsub;
    }
  }, [receiverData?.userId]);
  
  const sendMessage = (e) => {
      if (user && receiverData) {
        e.preventDefault();
        console.log("you typed input",chatMessage);

        db.collection('messages').doc(user.uid).collection('messages').add({
          username: user.displayName,
          messageUserId: user.uid,
          message: chatMessage,
          timestamp: new Date(),
        });

        db.collection('messages').doc(receiverData.userId).collection('messages').add({
          username: user.displayName,
          messageUserId: user.uid,
          message: chatMessage,
          timestamp: new Date(),
        });
        setChatMessage("");
      };
  
  return (
    <Container>
      <Messengers>
        <MessengersHeader>
          <h2 style={{ margin: 0 }}>{user?.displayName} </h2>
        </MessengersHeader>
        <ActorsList>
          <UsersComponent
              users={users}
              setReceiverData={setReceiverData}
              navigate={navigate}
              currentUserId={user?.uid}
          />
        </ActorsList>
      </Messengers>
      <Messages>
        <MessagesHeader>
          <h2 style={{ margin: 2, padding: 10 }}>
            {receiverData ? receiverData.username : user?.displayName}{" "}
          </h2>
          <p>Icon click to delete</p>
        </MessagesHeader>
        <SelectedAct>
          {allMessages &&
              allMessages.map(({ id, messages }) => {
                return (
                    <AllActMessages
                        key={id}
                        style={{
                          flexDirection:
                              user?.uid == messages.messageUserId
                                  ? "row-reverse"
                                  : "row",
                        }}
                    >
                  <span
                      style={{
                        borderTopLeftRadius:
                            user?.uid == messages.messageUserId ? 10 : 0,
                        borderTopRightRadius:
                            user?.uid == messages.messageUserId ? 0 : 10,
                        textAlign:
                            user?.uid == messages.messageUserId ? "right" : "left",
                      }}
                  >
                    {messages.message}
                  </span>
                    </AllActMessages>
                );
              })}
        </SelectedAct>
        <Reply>
          <ReplyText
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              style={ReplyText}
              type="text"
              placeholder="Type message..."
          />
          <IconButton onClick={sendMessage}>
            <SendIcon style={{ margin: 10 }} />
          </IconButton>
          />
          button to send reply
        </Reply>
      </Messages>
    </Container>
  );
};

export default Messaging;
