import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ResourceCheckBoxes from "../ResourceCheckBoxes";
import {
  Popup,
  Top,
  Content,
  RPUHeading,
  OrgInfo,
  ResourceDescription,
  ResourcesCheckBoxes,
} from "./styles/styledResourcePopup";

export const ResourcePopup = (props) => {
  return (
    <>
      {props.showModal === "open" && (
        <Popup>
          <Top>
            <p>Resource alerts</p>
            <AiOutlineCloseCircle onClick={(e) => props.handleClick(e)} />
          </Top>
          <OrgInfo>
            <RPUHeading></RPUHeading>
            <img src="/images/user.svg" alt="" />
            <Content></Content>
          </OrgInfo>
          <ResourceDescription>
            <RPUHeading></RPUHeading>
            <Content></Content>
          </ResourceDescription>
          <ResourcesCheckBoxes>
            <RPUHeading></RPUHeading>
            <Content>
              <ResourceCheckBoxes />
            </Content>
          </ResourcesCheckBoxes>

          <button>Done</button>
        </Popup>
      )}
    </>
  );
};
