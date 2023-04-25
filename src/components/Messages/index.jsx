import React, { useState, useEffect } from "react";

import { Container } from "./stylesMessaging";

import Channel from "./extensions/Channel";

import firebase, { auth, db } from "../../firebase";

function Messaging() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    // Cleanup Subscription
    return unsubscribe;
  }, []);
  const signInWithGoogle = async () => {
    // Retrieve Google Provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set Language to the default browser preference
    auth.useDeviceLanguage();
    // Start sign in process
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return "Loading ...";

  return (
    <Container>
      <Channel user={user} db={db} />
    </Container>
  );
}

export default Messaging;
