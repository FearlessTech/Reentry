import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { useParams } from "react-router-dom";
import firebase from "firebase";

import {
  generateChatId,
  Chat,
  addReferenceTo,
  getUserFromId,
} from "../customHooks/Padronizer";

import {
  MessagesHeader,
  SelectedAct,
  Reply,
  ReplyText,
} from "../stylesMessaging";

import getCurrentUser from "../../Network/api/getCurrentUser";

export default function PrivateChat({ db = null }) {
  const [newMessage, setNewMessage] = useState("");
  const scroller = useRef();
  const params = useParams();
  const [hasNew, setHasNew] = useState(null);
  const [messages, setMessages] = useState(null);

  let chatId = null;

  useEffect(() => {
    if (hasNew === false || !db) return;
    let unsubscribe;
    (async () => {
      if (!chatId) {
        const user = await getCurrentUser();
        chatId = generateChatId(user.uid, params.uid);
      }
      return chatId;
    })().then((chatId) => {
      unsubscribe = db
        .collection("chats")
        .doc(chatId)
        .collection("chat")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((querySnapshot) => {
          // Get all documents from collection ~ with IDs
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          // update state
          (async () => {
            const user = await getCurrentUser();
            const newData = data.map((message) => {
              return { ...message, current: message.uid === user.uid };
            });
            setMessages(newData);
          })();
        });

      // Detach listener
      return unsubscribe;
    });
    setHasNew(false);
  }, [db, hasNew]);

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!newMessage) return;
    //
    let user;
    let target;
    let dUser;

    async function verifyMessages() {
      try {
        user = await getCurrentUser();
        target = await getUserFromId(params.uid);
        dUser = await getUserFromId(params.uid);
        const chatID = generateChatId(user.uid, params.uid);
        const chat = new Chat(chatID);

        const { exists, payload } = await chat.chatExists();

        if (exists) {
          await chat.createChat({
            text: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        } else {
          await chat.createChat({
            text: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
          await addReferenceTo(user.uid, target);
          await addReferenceTo(params.uid, dUser);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    verifyMessages();
    setHasNew(() => true);
    setNewMessage(() => "");
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
                <Message {...message} left={message.current} />
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
