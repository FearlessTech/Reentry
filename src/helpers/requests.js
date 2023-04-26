import { useEffect, useState } from "react";
import { db, provider, auth } from "../services/firebase/firebase";

const getSingleUserInfo = async (idName, idValue) => {
  const singleUser = await db
    .collection("users")
    .where(idName, "==", idValue)
    .get();
  return singleUser.docs[0].data();
};

const getSentRequests = async (currentUser) => {
  try {
    const users = [];
    const currentUserData = await getSingleUserInfo("uid", currentUser.uid);

    for (let userId of currentUserData.sent_requests) {
      const userData = await getSingleUserInfo("email", userId);
      users.push(userData);
    }
    return users;
    //
  } catch (e) {
    console.log(e.message);
  }
};

const getReceivedRequests = async (currentUser) => {
  try {
    const users = [];
    const currentUserData = await getSingleUserInfo("uid", currentUser.uid);
    for (let userId of currentUserData.received_requests) {
      const userData = await getSingleUserInfo("email", userId);
      users.push(userData);
    }
    return users;
    //
  } catch (e) {
    console.log(e.message);
  }
};

export function useGetReceivedRequests() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(null);

  const unsub = auth.onAuthStateChanged((user) => {
    if (user) setCurrentUser(user);
    unsub();
  });

  useEffect(() => {
    if (!currentUser) return users;

    (async () => {
      const usersData = await getReceivedRequests(currentUser);
      setUsers(usersData);
    })();
  }, [currentUser]);

  return users;
}

export function useGetSentRequests() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(null);

  const unsub = auth.onAuthStateChanged((user) => {
    if (user) setCurrentUser(user);
    unsub();
  });

  useEffect(() => {
    if (!currentUser) return users;

    (async () => {
      const usersData = await getSentRequests(currentUser);
      setUsers(usersData);
    })();
  }, [currentUser]);
  return users;
}
