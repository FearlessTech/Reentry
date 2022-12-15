import { LeftNetwork } from "./LeftNetwork";
import { RightNetwork } from "./RightNetwork";
import { RightBottom } from "./RightBottom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Network = () => {
  return (
      <Container style={{ marginTop : '100px' }} >
        <Row>
          <Col sm={3}>
            <LeftNetwork />
          </Col>
          <Col sm={9}>
            <RightNetwork />
            <RightBottom />
          </Col>
        </Row>
      </Container>
  );
};
