import { auth } from "../services/firebase/firebase";

export default async function getCurrentUser() {
  const getUser = new Promise((resolve, reject) => {
    let user = auth.currentUser;
    const unsub = auth.onAuthStateChanged((change) => {
      if (change) user = change;
      unsub();
      resolve(user);
    });
  });

  return await getUser;
}
