import {
  Container,
  Messengers,
  MessengersHeader,
  ActorsList,
  Messages,
  MessagesHeader,
  SelectedAct,
  Reply,
  ReplyText,
} from "../styles/stylesMessaging";

const Messaging = () => {
  return (
    <Container>
      <Messengers>
        <MessengersHeader>
          <h2>Users Messages</h2>
        </MessengersHeader>
        <ActorsList>
          Actors who messaged user
          <br/>
          <br/>
          When user clicks on an actor,
          the messages between the user
          and the actor will be displayed
          in the SelectedAct section and
          the Actors Name displayed
          in the MessagesHeader h2.
        </ActorsList>
      </Messengers>
      <Messages>
        <MessagesHeader>
          <h2>Messages from Actor</h2>
          <p>Icon click to delete</p>
        </MessagesHeader>
        <SelectedAct>
          Selected actors messages to user
        </SelectedAct>
        <Reply>
          <ReplyText></ReplyText>
          button to send reply
        </Reply>
      </Messages>
    </Container>
  );
};

export default Messaging;