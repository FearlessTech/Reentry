import {
  Container,
  Messengers,
  Messages
} from "../styles/stylesMessaging";

const Messaging = () => {
  return (
    <Container>
      <Messengers> Actors who messaged user</Messengers>
      <Messages>Selected actors messages to user </Messages>
    </Container>
  );
};

export default Messaging;