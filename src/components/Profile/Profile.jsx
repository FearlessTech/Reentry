import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineUserAdd, AiOutlinePlus } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import ResourceCheckBoxes from "../ResourceCheckBoxes";
import {
  Container,
  ArtCard,
  Widget,
  Item,
  CardBackground,
  UserInfo,
  Photo,
  ProfileMain,
  ProfileLeft,
  PFIntro,
  PFCheckBoxes,
  PFPost,
  PFResourcesPost,
  PFHeading,
  Content,
} from "./stylesProfile.jsx";

const Profile = (props) => {
  return (
    <Container>
      <ProfileLeft>
        <ArtCard>
          <UserInfo>
            <CardBackground />
            <Link to={<Profile />} className="welcome">
              <Photo>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
              </Photo>
              <h3>Welcome, {props.user ? props.user.displayName : "there"}!</h3>
            </Link>
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
      </ProfileLeft>
      <ProfileMain>
        <PFIntro>
          <PFHeading>Introductions</PFHeading>
          <Content></Content>
        </PFIntro>
        <PFCheckBoxes>
          <PFHeading>Resources Check Boxes</PFHeading>
          <Content>
            <ResourceCheckBoxes />
          </Content>
        </PFCheckBoxes>
        <PFPost>
          <PFHeading>Users Post</PFHeading>
          <Content></Content>
        </PFPost>
        <PFResourcesPost>
          <PFHeading>Users Posted Resources</PFHeading>
          <Content></Content>
        </PFResourcesPost>
      </ProfileMain>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Profile);
