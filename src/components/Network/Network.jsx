import { LeftNetwork } from "./LeftNetwork";
import { RightNetwork } from "./RightNetwork";
import { RightBottom } from "./RightBottom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Network = () => {
  return (
      <Container style={{ marginTop:'100px'}} >
        <Row style={{ display:"flex"}}>
          <Col style={{ margin:'10px'}} >
            <LeftNetwork />
          </Col>
          <Col style={{ margin:'10px'}} >
            <RightNetwork />
            <RightBottom />
          </Col>
        </Row>
      </Container>
  );
};
