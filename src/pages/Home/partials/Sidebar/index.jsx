import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineUserAdd } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

import {
  Container,
  ArtCard,
  UserInfo,
  CardBackground,
  Photo,
  Widget,
  Item,
} from "./styles.jsx";
import { UserImage } from "../../../../components/Image/index.jsx";

const HomeSidebar = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          {props.redirect ? (
            <Link to="/profile" className="welcome">
              <Photo>
                {props.user && <UserImage source={props.user.photoURL} />}
              </Photo>
              <h3>Welcome, {props.user ? props.user.displayName : "there"}!</h3>
            </Link>
          ) : (
            <label className="welcome" htmlFor="image">
              <input
                type="file"
                id="image"
                name="image"
                accept=".png, .jpg, .jpeg"
                style={{ display: "none" }}
              />
              <Photo>
                {props.user && <UserImage source={props.user.photoURL} />}
              </Photo>
              <h3>Welcome, {props.user ? props.user.displayName : "there"}!</h3>
            </label>
          )}
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
              <Link to="/messaging">
                <span>Messages</span>
              </Link>
            </div>
            <AiOutlineUserAdd />
          </nav>
        </Widget>
        <Item>
          <Link to="/resources">
            <span>
              <BsFillBookmarkFill />
              My Resources
            </span>
          </Link>
        </Item>
      </ArtCard>
      <div className="other">{props.children}</div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(HomeSidebar);
