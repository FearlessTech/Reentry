import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import db from "../../../firebase";

import {
  MessagesHeader,
  SelectedAct,
  Reply,
  ReplyText,
} from "../stylesMessaging";

import useGetMessages from "../customHooks/useGetMessages";
import getCurrentUser from "../../Network/api/getCurrentUser";

export default function PrivateChat(props) {
  const [newMessage, setNewMessage] = useState("");
  const scroller = useRef();
  const params = useParams();
  const [hasNew, setHasNew] = useState(null);
  const messages = useGetMessages(params.uid, hasNew);

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!newMessage) return;

    let id;
    let myId;
    let newId;
    let isNew = false;

    async function createChat() {
      const currentUser = await getCurrentUser();

      async function setChat(chats) {
        const newChats = [...chats];

        newChats.push(newId);
        db.collection("users").doc(currentUser.email).update({
          chats: newChats,
        });

        const query = db.collection("users").where("uid", "==", id);
        query.get().then((payload) => {
          console.log(payload.docs);
          const data = payload.docs[0].data();
          const newChats = [...data.chats];
          newChats.push(newId);
          payload.docs[0].ref.update({
            chats: newChats,
          });
        });
      }

      myId = currentUser.uid;
      id = params.uid;

      db.collection("users")
        .doc(currentUser.email)
        .get()
        .then(async (payload) => {
          const data = payload.data();
          if (data.chats.includes(id + myId)) newId = id + myId;
          else if (data.chats.includes(myId + id)) newId = myId + id;
          else {
            newId = id + myId;
            isNew = true;
            await setChat(data.chats);
          }
        });

      db.collection("chats")
        .doc(newId)
        .collection("chat")
        .add({
          text: newMessage,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid: id,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        })
        .then(() => {
          setHasNew(() => null);
          setNewMessage(() => "");
        });
    }
    createChat();
  }
  function handleOnChange(e) {
    setNewMessage(e.target.value);
  }

  useEffect(() => {
    try {
      if (!scroller.current) return;
      const element = scroller.current;
      element.scrollTop = element.scrollHeight;
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <>
      <MessagesHeader>
        <h2>Advocates Chat Room</h2>
      </MessagesHeader>
      <SelectedAct ref={scroller}>
        <ul className="messages-node">
          {messages &&
            messages.map((message) => (
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
            placeholder="Type you message here..."
            autoComplete="off"
          />
          <button type="submit" disabled={!newMessage}>
            Send
          </button>
        </form>
      </Reply>
    </>
  );
}
