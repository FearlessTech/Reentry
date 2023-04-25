import styled from "styled-components";

const Container = styled.div`
  grid-area: rightside;
  margin-right: 20px;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 2px 3px 2px -2px rgba(110, 104, 104, 0.75);
  padding: 12px;
`;

const Title = styled.div`
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.div`
  margin-top: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #074453af;
    align-items: center;
    margin: 12px;
    position: relative;
    font-size: 14px;
    font-weight: bold;
  }
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export { Container, FollowCard, Title, FeedList, BannerCard };
