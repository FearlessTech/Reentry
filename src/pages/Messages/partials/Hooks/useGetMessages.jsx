import { useState } from "react";
import { useEffect } from "react";
import db from "../../../../firebase";
import getCurrentUser from "../../Network/api/getCurrentUser";
import firebase from "firebase";

const useGetMessages = (uid, hasNew) => {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    (async () => {})();
  }, [hasNew]);

  return chat;
};
export default useGetMessages;
