import { auth, provider, storage } from "../firebase";
import db from "../firebase";

import {
  SET_DARK_MODE,
  SET_USER,
  SET_LOADING_STATUS,
  GET_ARTICLES,
} from "./actionType";

export function generateKeyWords(name, email) {
  const words = [];

  name.split(" ").forEach((word) => words.push(word));
  words.push(email.split("@")[0]);

  return words;
}

export async function setFbUser(userData) {
  const userQuery = db.collection("users").doc(userData.email);

  const data = {
    connections: [],
    keywords: generateKeyWords(userData.displayName, userData.email),
    name: userData.displayName,
    email: userData.email,
    photoURL: userData.photoURL,
    received_requests: [],
    sent_requests: [],
    uid: userData.uid,
  };

  await userQuery.get().then(async (res) => {
    if (!res.exists) {
      userQuery.set(data);
    }
  });
  console.log("userdata: ", userData);
}

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setDarkMode = (payload) => ({
  type: SET_DARK_MODE,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        (async () => {
          await setFbUser(payload.user);
        })();
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

const showProgress = (snap) => {
  const progress = (snap.bytesTransferred / snap.totalBytes) * 100;

  console.log(`Progress: ${progress}%`);
  if (snap.state === "RUNNING") {
    console.log(`Progress: ${progress}%`);
  }
};

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image) {
      // upload the image
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);

      upload.on(
        // code to be executed after the upload change state
        "state-changed",
        (snapshot) => {
          //keep track of progress
          showProgress(snapshot);
        },
        (error) => {
          console.log("an error ocurred while sending the file to our servers");
          console.log(error.code);
        },
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
              uid: payload.user.uid,
            },
            video: "",
            sharedImg: downloadURL,
            comments: 0,
            likes: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      const upload = storage
        .ref(`videos/${payload.video.name}`)
        .put(payload.video);

      upload.on(
        // code to be executed after the upload change state
        "state-changed",
        (snapshot) => {
          //keep track of progress
          showProgress(snapshot);
        },
        (error) => {
          console.log("an error ocurred while sending the file to our servers");
          console.log(error.code);
        },
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
              uid: payload.user.uid,
            },
            video: downloadURL,
            sharedImg: "",
            comments: 0,
            likes: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
          uid: payload.user.uid,
        },
        video: "",
        sharedImg: "",
        comments: 0,
        likes: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticlesAPI() {
  return (dispatch) => {
    let payload;

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => {
          const articleObject = { ...doc.data(), id: doc.id };
          return articleObject;
        });
        dispatch(getArticles(payload));
      });
  };
}
