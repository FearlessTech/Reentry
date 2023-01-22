import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import Message from "./Message";

import {
  ActorsList,
  Messages,
  MessagesHeader,
  Messengers,
  MessengersHeader,
  SelectedAct,
  Reply,
  ReplyText,
} from "../stylesMessaging";

const Channel = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          // Get all documents from collection ~ with IDs
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          // update state
          setMessages(data);
        });

      // Detach listener
      return unsubscribe;
    }
  }, [db]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // onclick="document.getElementById('myInput').value = ''"

    if (db) {
      db.collection("messages")
        .add({
          text: newMessage,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          displayName,
          photoURL,
        })
        .then(() => {
          setNewMessage(() => {
            return "";
          });
        });
    }
  };

  return (
    <>
      <Messengers>
        <MessengersHeader>
          <h2>Users Messages</h2>
        </MessengersHeader>
        <ActorsList>
          Actors who messaged user
          <br />
          <br />
          When user clicks on an actor, the messages between the user and the
          actor will be displayed in the SelectedAct section and the Actors Name
          displayed in the MessagesHeader h2.
        </ActorsList>
      </Messengers>
      <Messages>
        <MessagesHeader>Advocates Chat Room</MessagesHeader>
        <SelectedAct>
          <ul>
            {messages.map((message) => (
              <li key={message.id}>
                <Message {...message} />
              </li>
            ))}
          </ul>
        </SelectedAct>
        <Reply>
          <form onSubmit={handleOnSubmit}>
            <ReplyText
              type="text"
              value={newMessage}
              onChange={handleOnChange}
              id="myInput"
              // onfocus="this.value=''" This does not work either
              placeholder="Type you message here..."
            />
            <button
              type="submit"
              disabled={!newMessage}
              onclick="document.getElementById('myInput').e.target.value= ''"
            >
              Send
            </button>
          </form>
        </Reply>
      </Messages>
    </>
  );
};

export default Channel;
