import { createContext, useState } from "react";
import { connect } from "react-redux";
import HomeSidebar from "../Home/partials/Sidebar";
import Introduction from "./partials/Introduction";
import ResourceTree from "./partials/ResourceTree";
import SidebarSection from "./partials/SidebarSection";

import { Container, ProfileMain, ProfileLeft } from "./styles.jsx";

const Profile = ({ user, profile, updateIntroduction, updateResources }) => {
  function handleIntroductionUpdate(introduction) {
    updateIntroduction({ introduction });
  }

  function handleResourcesUpdate(resources) {
    updateResources({ resources });
  }

  return (
    <Container>
      <ProfileLeft>
        <HomeSidebar>
          <SidebarSection title={"Contact Info"}>empty for now</SidebarSection>
          <SidebarSection title={"Achievments"}>empty for now</SidebarSection>
          <SidebarSection title={"Goals"}>empty for now</SidebarSection>
        </HomeSidebar>
      </ProfileLeft>

      <ProfileMain>
        <SidebarSection title={"Introductions"}>
          <Introduction
            text={profile.introduction}
            handler={handleIntroductionUpdate}
          />
        </SidebarSection>
        <SidebarSection title={"Resources Check Boxes"}>
          <ResourceTree
            activeResources={profile.resources}
            handler={handleResourcesUpdate}
          />
        </SidebarSection>
        <SidebarSection title={"Users Post"}>empty for now</SidebarSection>
        <SidebarSection title={"Users Posted Resources"}>
          empty for now
        </SidebarSection>
      </ProfileMain>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    profile: state.profileState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIntroduction: (payload) => {
      dispatch({ type: "UPDATE_INTRODUCTION", payload });
    },
    updateResources: (payload) => {
      dispatch({ type: "UPDATE_RESOURCES", payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
