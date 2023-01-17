import { useEffect, useState } from "react";
import { db, provider, auth } from "../../firebase";
export const receivedRequests = [
  {
    name: "Leta Dean",
    image: {
      url: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. corrupti earum officiis. Ad cum error natus asperiores quidem?",
  },
  {
    name: "Erik Armstrong",
    image: {
      url: "https://randomuser.me/api/portraits/men/0.jpg",
    },
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ex laudantium explicabo maxime! Nisi obcaecati et adipisci cum.",
  },
];
export const sentRequests = [
  {
    name: "Deanna Scott",
    image: {
      url: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Um officiis dolor vel molestias quidem dicta perferendis praesentium inventore",
  },
  {
    name: "Erik Armstrong",
    image: {
      url: "https://randomuser.me/api/portraits/men/0.jpg",
    },
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ex laudantium explicabo maxime! Nisi obcaecati et adipisci cum.",
  },
];
export const searchResults = [
  {
    name: "Deanna Scott",
    image: {
      url: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Um officiis dolor vel molestias quidem dicta perferendis praesentium inventore",
  },
  {
    name: "Erik Armstrong",
    image: {
      url: "https://randomuser.me/api/portraits/men/0.jpg",
    },
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ex laudantium explicabo maxime! Nisi obcaecati et adipisci cum.",
  },
];

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
