import { connect } from "react-redux";

import ResourceTree from "./partials/ResourceTree";
import data from "../../data/resources.json";

import { IoMdSettings } from "react-icons/io";

import { useState, useRef } from "react";

import db from "../../services/firebase/firebase";

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
import Leftside from "../Home/partials/LeftSide";
import Introduction from "./partials/Introduction";

const Profile = (props) => {
  const [edition, setEdition] = useState(true);
  const intro = useRef();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <Container>
      <ProfileLeft>
        <Leftside>
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
        </Leftside>
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
            <ResourceTree data={data.Resources} />
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
