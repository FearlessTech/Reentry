import db from "../../../firebase";
import firebase from "firebase";

export default class Padronizer {
  constructor(sample1, sample2) {
    this.sample1 = sample1;
    this.sample2 = sample2;
    this.result = null;
  }

  is_numeric(str) {
    return /^\d+$/.test(str);
  }

  getNums(sample) {
    sample = sample.split("");
    const numbers = sample.reduce((prev, char) => {
      if (this.is_numeric(char)) return prev + Number(char);
      else return char.charCodeAt(0);
    }, 0);
    return numbers;
  }

  padronize() {
    const sample1 = this.getNums(this.sample1);
    const sample2 = this.getNums(this.sample2);
    const bigger = Math.max(sample1, sample2);
    if (sample1 === bigger) this.result = this.sample1 + this.sample2;
    else this.result = this.sample2 + this.sample1;
  }
}

export function generateChatId(sample1, sample2) {
  const padronizer = new Padronizer(sample1, sample2);
  padronizer.padronize();
  return padronizer.result;
}

export class Chat {
  constructor(chatId) {
    this.chatId = chatId;
    this.chatPath = null;
  }

  async chatExists() {
    const data = { exists: false, payload: null };
    await db
      .collection("chats")
      .doc(this.chatId)
      .collection("chat")
      .get()
      .then((payload) => {
        console.log(payload);
        console.log(this.chatId);
        if (!payload.empty) {
          data.exists = true;
          data.payload = payload;
        }
      });
    return data;
  }

  async createChat(message) {
    await db
      .collection("chats")
      .doc(this.chatId)
      .collection("chat")
      .add({
        ...message,
      })
      .then((payload) => {
        // console.log(payload);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }
}

export async function addReferenceTo(userid, ref) {
  console.log(userid);
  console.log(ref);
  let newChats = [];
  const user = await db
    .collection("users")
    .where("uid", "==", userid)
    .get()
    .then((payload) => {
      const doc = payload.docs[0];
      newChats = [...doc.data().chats];
      return doc.ref;
    });
  newChats.push({
    uid: ref.uid,
    name: ref.name,
    photoURL: ref.photoURL,
  });
  await user.update({
    chats: newChats,
  });
}

export async function getUserFromId(uid) {
  return await db
    .collection("users")
    .where("uid", "==", uid)
    .get()
    .then((payload) => {
      return payload.docs[0].data();
    });
}
