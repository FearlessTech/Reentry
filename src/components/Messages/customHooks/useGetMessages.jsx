import { useState } from "react";
import { useEffect } from "react";
import db from "../../../firebase";
import getCurrentUser from "../../Network/api/getCurrentUser";
import firebase from "firebase";

export class ChatGenerator {
  constructor(uid) {
    this.currentUser = null;
    this.userUid = uid;
    this.chatQuery = null;
    this.id = null;
    this.chat = [];
  }

  async setCurrentUser() {
    if (this.user) return;
    const user = await getCurrentUser();
    this.currentUser = user;
  }

  generateId() {
    console.log("generate");
    if (!this.id) {
      this.id = this.currentUser.uid + this.userUid;
    }
  }

  setChatQuery() {
    this.chatQuery = db.collection("chats").doc(this.id);
  }

  async getChat() {
    this.generateId();
    db.collection("chats")
      .doc(this.id)
      .collection("chat")
      .orderBy("createdAt")
      .limit(30)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        this.chat = data;
      });
  }

  async get() {
    this.generateId();
    this.setChatQuery();
    this.chatQuery.get().then((payload) => {
      if (payload.exists) {
        this.getChat();
      }
    });
    return this.chat;
  }
}

const useGetMessages = (uid, hasNew) => {
  const [chat, setChat] = useState(null);
  const chatGen = new ChatGenerator(uid);

  useEffect(() => {
    (async () => {
      await chatGen.setCurrentUser();
      const chat = await chatGen.get();
      setChat(chat);
    })();
  }, [hasNew]);

  return chat;
};
export default useGetMessages;
