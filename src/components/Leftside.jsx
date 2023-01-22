import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineUserAdd, AiOutlinePlus } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

import {
  Container,
  ArtCard,
  UserInfo,
  CardBackground,
  Photo,
  AddPhotoText,
  Widget,
  Item,
  CommunityCard,
} from "../styles/stylesLeftside.jsx";
import { UserImage } from "./components/Image.jsx";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <Link to="/profile" className="welcome">
            <Photo>
              {props.user && <UserImage source={props.user.photoURL} />}
            </Photo>
            <h3>Welcome, {props.user ? props.user.displayName : "there"}!</h3>
          </Link>
          <a>
            <AddPhotoText></AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <nav>
            <div>
              <Link to="/notifications">
                <span>Notifications</span>
              </Link>
              <Link to="/network">
                <span>Network</span>
              </Link>
              <Link to="/functionalities">
                <span>Welcome</span>
              </Link>
            </div>
            <AiOutlineUserAdd />
          </nav>
        </Widget>
        <Item>
          <span>
            <BsFillBookmarkFill />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <AiOutlinePlus />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(Leftside);
