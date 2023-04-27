import { connect } from "react-redux";
import HomeSidebar from "../Home/partials/Sidebar";
import Introduction from "./partials/Introduction";
import ResourceTree from "./partials/ResourceTree";

import {
  Container,
  ProfileMain,
  ProfileLeft,
  PFContactInfo,
  PFAchievments,
  PFGoals,
  PFIntro,
  PFCheckBoxes,
  PFPost,
  PFResourcesPost,
  PFHeading,
  Content,
} from "./styles.jsx";

const Profile = (props) => {
  return (
    <Container>
      <ProfileLeft>
        <HomeSidebar>
          <PFContactInfo>
            <PFHeading>Contact Info</PFHeading>
            <Content>{/* form here */}</Content>
          </PFContactInfo>
          <PFAchievments>
            <PFHeading>Achievments</PFHeading>
            <Content>{/* form here */}</Content>
          </PFAchievments>
          <PFGoals>
            <PFHeading>Goals</PFHeading>
            <Content>{/* form here */}</Content>
          </PFGoals>
        </HomeSidebar>
      </ProfileLeft>

      <ProfileMain>
        <PFIntro>
          <PFHeading>Introductions</PFHeading>

          <Content>
            <Introduction />
          </Content>
        </PFIntro>
        <PFCheckBoxes>
          <PFHeading>Resources Check Boxes</PFHeading>

          <Content>
            <ResourceTree />
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
