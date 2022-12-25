import { AiOutlineArrowRight } from "react-icons/ai";
import { BsInfoSquareFill } from "react-icons/bs";


import {
  Container,
  FollowCard,
  Title,
  FeedList,
  Avatar,
  Recommendation,
  BannerCard
} from "../styles/stylesRightside.jsx";

const Rightside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <BsInfoSquareFill />
        </Title>

        <FeedList>
          <li>
            <a><Avatar /></a>
            <div>
              <span>#Reentry</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a><Avatar /></a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <AiOutlineArrowRight />
        </Recommendation>
      </FollowCard>

      <BannerCard>
        <img src="/images/Reentry.jpg" alt="" />
      </BannerCard>
    </Container>
  );
};

export default Rightside;