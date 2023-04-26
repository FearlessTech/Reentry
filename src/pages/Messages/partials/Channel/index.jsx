import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import firebase from "firebase/app";
import Message from "../SingleMessage";
import ActorElement from "../Actor";
import PrivateChat from "../PrivateChat";

import {
  ActorsList,
  Messages,
  MessagesHeader,
  Messengers,
  MessengersHeader,
  SelectedAct,
  Reply,
  ReplyText,
} from "./styles";

const Channel = ({ user = {}, db = null }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroller = useRef();
  const globalCard = {
    name: "Global chat",
    photoURL:
      "https://avatars.githubusercontent.com/u/122039071?s=400&u=71ad1243b64ff9fd68445f297c039a60ceaefd4a&v=4",
    lastMessage: "Talk to everyone with the global chat",
    uid: "",
  };
  const [recent, setRecent] = useState([globalCard]);

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    try {
      if (!scroller.current) return;
      const element = scroller.current;
      element.scrollTop = element.scrollHeight;
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await db
        .collection("users") // admin index
        .where("uid", "==", user.uid)
        .get()
        .then((payload) => {
          const data = payload.docs[0].data();
          setRecent(() => [globalCard, ...data.chats]);
        });
    })();
  }, []);

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

          (async () => {
            const newData = data.map((message) => {
              return { ...message, current: message.uid === user.uid };
            });
            setMessages(newData);
          })();
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
          <ul className="actors">
            {recent.map((user, i) => {
              return (
                <ActorElement
                  name={user.name}
                  photoURL={user.photoURL}
                  lastMessage={user.lastMessage}
                  uid={user.uid}
                  key={user.uid + i}
                />
              );
            })}
          </ul>
        </ActorsList>
      </Messengers>

      <Messages>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MessagesHeader>
                  <h2>Advocates Chat Room</h2>
                </MessagesHeader>
                <SelectedAct ref={scroller}>
                  <ul className="messages-node">
                    {messages.map((message) => (
                      <li key={message.id}>
                        <Message {...message} current={message.current} />
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
                      placeholder="Type you message here..."
                      autoComplete="off"
                    />
                    <button type="submit" disabled={!newMessage}>
                      Send
                    </button>
                  </form>
                </Reply>
              </>
            }
          />
          <Route path=":uid" element={<PrivateChat db={db} />} />
        </Routes>
      </Messages>
    </>
  );
};

export default Channel;
