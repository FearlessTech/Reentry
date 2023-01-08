import {
  Container,
  QueryBox,
  QueryBoxHeader,
  QueryOptions,
  ShowQueryBox,
  ShowQueryBoxHeader,
  QueriedItems,
  QueryResult,
} from "../styles/stylesNetwork";

const Network = () => {
  return (
    <Container>
      <QueryBox>
        <QueryBoxHeader>
          <h2>Users Network</h2>
        </QueryBoxHeader>
        <QueryOptions>
          <br />
          <h3>Search Box</h3>
          <br />
          <h3>My Network</h3>
          <br />
          <h3>Status Pending</h3>
          <br />
          <h3>Request Pending</h3>
          <br />
          <h3>People You May Know</h3>
        </QueryOptions>
      </QueryBox>
      <ShowQueryBox>
        <ShowQueryBoxHeader>
          <h2>Will display what the User Queried</h2>
        </ShowQueryBoxHeader>
        <QueriedItems>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
          <QueryResult>
            <img src="/images/user.svg" alt="" />
          </QueryResult>
        </QueriedItems>
      </ShowQueryBox>
    </Container>
  );
};

export default Network;
