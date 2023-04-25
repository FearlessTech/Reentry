import db from "../firebase";
import getCurrentUser from "./getCurrentUser";

class DbHandler {
  constructor() {
    this.oncourse = false;
    this.currentUser = null;
    this.currentUserQuery = null;
    this.requestedUserQuery = null;
  }

  async defineCurrentUser() {
    if (this.currentUser) return;
    this.currentUser = await getCurrentUser();
    this.defineCurrentUserQuery();
  }

  async defineCurrentUserQuery() {
    this.currentUserQuery = db
      .collection("users")
      .where("uid", "==", this.currentUser.uid);
  }

  async defineRequestedUser(id) {
    await this.defineRequestedUserQuery(id);
  }

  async defineRequestedUserQuery(id) {
    this.requestedUserQuery = db.collection("users").doc(id);
  }

  async getElm(query) {
    return await query.get();
  }

  async getData(elm) {
    return elm.data();
  }

  async getElementFromQuery(query) {
    // to use with queries that will always return a single result
    const res = await this.getElm(query);
    return res;
  }

  async getFirstElementFromQuery(query) {
    // to queries that return array with one match
    const res = await this.getElm(query);
    return res.docs[0];
  }

  reset() {
    this.requestedUserQuery = null;
  }

  async cancelRequest() {
    if (this.oncourse) return;
    this.oncourse = true;

    const currentUserElm = await this.getFirstElementFromQuery(
      this.currentUserQuery
    );

    const requestedUserElm = await this.getElementFromQuery(
      this.requestedUserQuery
    );

    const currentUserData = await this.getData(currentUserElm);
    const requestedUserData = await this.getData(requestedUserElm);

    const new_sent_requests = currentUserData.sent_requests.filter(
      (item) => item !== requestedUserData.email
    );

    const new_received_requests = requestedUserData.received_requests.filter(
      (item) => item != currentUserData.email
    );

    await this.requestedUserQuery.update({
      received_requests: new_received_requests,
    });

    await currentUserElm.ref.update({
      sent_requests: new_sent_requests,
    });

    this.oncourse = false;
  }

  async acceptRequest() {
    if (this.oncourse) return;
    this.oncourse = true;

    const currentUserElm = await this.getFirstElementFromQuery(
      this.currentUserQuery
    );

    const requestedUserElm = await this.getElementFromQuery(
      this.requestedUserQuery
    );

    const currentUserData = await this.getData(currentUserElm);
    const requestedUserData = await this.getData(requestedUserElm);

    const new_current_user_connections = [...currentUserData.connections];
    new_current_user_connections.push(requestedUserData.email);

    const new_requested_user_connections = [...requestedUserData.connections];
    new_requested_user_connections.push(currentUserData.email);

    const new_sent_requests = requestedUserData.sent_requests.filter(
      (item) => item !== currentUserData.email
    );

    const new_received_requests = currentUserData.received_requests.filter(
      (item) => item != requestedUserData.email
    );

    await this.requestedUserQuery.update({
      sent_requests: new_sent_requests,
      connections: new_requested_user_connections,
    });

    await currentUserElm.ref.update({
      received_requests: new_received_requests,
      connections: new_current_user_connections,
    });

    this.oncourse = false;
  }

  async rejectRequest() {
    if (this.oncourse) return;
    this.oncourse = true;

    const currentUserElm = await this.getFirstElementFromQuery(
      this.currentUserQuery
    );

    const requestedUserElm = await this.getElementFromQuery(
      this.requestedUserQuery
    );

    const currentUserData = await this.getData(currentUserElm);
    const requestedUserData = await this.getData(requestedUserElm);

    const new_sent_requests = requestedUserData.sent_requests.filter(
      (item) => item !== currentUserData.email
    );

    const new_received_requests = currentUserData.received_requests.filter(
      (item) => item != requestedUserData.email
    );

    await this.requestedUserQuery.update({
      sent_requests: new_sent_requests,
    });

    await currentUserElm.ref.update({
      received_requests: new_received_requests,
    });

    this.oncourse = false;
  }
}

const dbHandler = new DbHandler();

export async function handleRejectRequest(id) {
  await dbHandler.defineCurrentUser();
  await dbHandler.defineRequestedUser(id);

  await dbHandler.rejectRequest();

  dbHandler.reset();
  return null;
}

export async function handleAcceptRequest(id) {
  await dbHandler.defineCurrentUser();
  await dbHandler.defineRequestedUser(id);

  await dbHandler.acceptRequest();

  dbHandler.reset();
  return null;
}

export async function handleCancelRequest(id) {
  await dbHandler.defineCurrentUser();
  await dbHandler.defineRequestedUser(id);

  await dbHandler.cancelRequest();

  dbHandler.reset();

  return null;
}
