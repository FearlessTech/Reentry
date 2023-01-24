import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineUserAdd, AiOutlinePlus } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import ResourceCheckBoxes from "./ResourceCheckBoxes";
import {
  Container,
  ArtCard,
  Widget,
  Item,
  CommunityCard,
  CardBackground,
  UserInfo,
  Photo,
  AddPhotoText,
  ProfileMain,
  ProfileLeft,
  PFIntro,
  PFCheckBoxes,
  PFPost,
  PFResourcesPost,
  PFHeading,
  Content,
} from "../styles/stylesProfile.jsx";

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
            <a>
              <AddPhotoText></AddPhotoText>
            </a>
          </UserInfo>

          <Widget>
            <a>
              <div>
                <span>Connections</span>
                <span>Grow your network</span>
              </div>
              <AiOutlineUserAdd />
            </a>
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
        </CommunityCard>
      </ProfileLeft>
      <ProfileMain>
        <PFIntro>
          <PFHeading>
            Introductions
            <div className="border" />
          </PFHeading>
          <Content></Content>
        </PFIntro>
        <PFCheckBoxes>
          <PFHeading>
            Resources Check Boxes
            <div className="border" />
          </PFHeading>
          <Content>
            <ResourceCheckBoxes />
          </Content>
        </PFCheckBoxes>
        <PFPost>
          <PFHeading>
            Users Post
            <div className="border" />
          </PFHeading>
          <Content></Content>
        </PFPost>
        <PFResourcesPost>
          <PFHeading>
            Users Posted Resources
            <div className="border" />
          </PFHeading>
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
