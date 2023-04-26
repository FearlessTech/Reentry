import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import Channel from "./extensions/Channel";

import { auth, db } from "../../firebase";

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

  if (initializing) return "Loading ...";

  return (
    <Container>
      <Channel user={user} db={db} />
    </Container>
  );
}

export default Messaging;
