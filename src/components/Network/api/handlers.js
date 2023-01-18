import db from "../../../firebase";
import getCurrentUser from "./getCurrentUser";

class DbHandler {
  constructor() {
    this.oncourse = false;
  }
  async cancelRequest(currentUser, id) {
    if (this.oncourse) return;
    this.oncourse = true;

    const currentUserQuery = db
      .collection("users")
      .where("uid", "==", currentUser.uid);

    const requestedUserQuery = db.collection("users").doc(id);

    //

    const currentUserData = (await currentUserQuery.get()).docs[0].data();
    const requestedUserData = (await requestedUserQuery.get()).data();

    //

    const new_sent_requests = currentUserData.sent_requests.filter(
      (item) => item !== requestedUserData.email
    );

    const new_received_requests = requestedUserData.received_requests.filter(
      (item) => item != currentUserData.email
    );

    await requestedUserQuery.update({
      received_requests: new_received_requests,
    });

    await (
      await currentUserQuery.get()
    ).docs[0].ref.update({
      sent_requests: new_sent_requests,
    });

    this.oncourse = false;
  }
}

const dbHandler = new DbHandler();

export async function handleRejectRequest(id) {
  return null;
}

export async function handleAcceptRequest(id) {
  return null;
}

export async function handleCancelRequest(id) {
  const currentUser = await getCurrentUser();

  dbHandler.cancelRequest(currentUser, id);
  return null;
}
