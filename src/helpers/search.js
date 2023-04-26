import { useEffect, useState } from "react";
import { db, provider, auth } from "../services/firebase/firebase";

export function getUsers(user) {
  try {
    return db
      .collection("users")
      .where("uid", "!=", user.uid)
      .get()
      .then((snapshot) => {
        const users = snapshot.docs.map((user) => {
          return user.data();
        });
        return users;
      });
  } catch (e) {
    console.log(e.message);
  }
}

function getResults(strings, user) {
  try {
    return db
      .collection("users")
      .where("uid", "!=", user.uid)
      .where("keywords", "array-contains-any", strings)
      .get()
      .then((snapshot) => {
        const users = snapshot.docs.map((user) => {
          return user.data();
        });
        return users;
      });
  } catch (e) {
    console.log(e.message);
  }
}

function splitQueryStr(string) {
  const newStr = string.split(" ");
  if (newStr === string) return [string];
  return newStr;
}

export function useGetResults(filters, string, flag) {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(null);

  const unsub = auth.onAuthStateChanged((user) => {
    if (user) setCurrentUser(user);
    unsub();
  });

  useEffect(() => {
    if (!currentUser) return users;

    if (!flag) {
      (async () => {
        const users = await getUsers(currentUser);
        setUsers(users);
      })();
    } else {
      if (!string || typeof string !== "string") return users;
      const subStr = splitQueryStr(string);

      (async () => {
        const users = await getResults(subStr, currentUser);
        setUsers(users);
      })();
    }
  }, [currentUser, flag]);

  return users;
}
