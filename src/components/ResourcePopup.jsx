import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  Popup,
  HR,
  Top,
  Content,
  SubContent,
  LeftCon,
  RightCon,
  Bottom,
  LeftB,
  RightB,
  Switch,
} from '../styles/styledResourcePopup';

export const ResourcePopup = ()=> {
  return (
    <Popup>
      <Top>
        <p>Resource alerts</p>
        <AiOutlineCloseCircle />
      </Top>
      <HR />
      <Content>
        <SubContent>
          <LeftCon>
          <h4>Resources</h4>
          <h6>Maine</h6>
          <p>Frequency: Daily via email and notification</p>
          <p>Get notified of similar Resources: Yes</p>
          </LeftCon>
          <RightCon>
            <img src="https://cdn-icons-png.flaticon.com/128/1659/1659682.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" alt="" />
          </RightCon>
        </SubContent>
        <SubContent>
          <LeftCon>
          <h4>resource at India</h4>
          <h6>India</h6>
          <p>Frequency: Daily via email and notification</p>
          <p>Get notified of similar Resources: Yes</p>
          </LeftCon>
          <RightCon>
            <img src="https://cdn-icons-png.flaticon.com/128/1659/1659682.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" alt="" />
          </RightCon>
        </SubContent>
        <SubContent>
          <LeftCon>
          <h4>resource at India</h4>
          <h6>India</h6>
          <p>Frequency: Daily via email and notification</p>
          <p>Get notified of similar Resources: Yes</p>
          </LeftCon>
          <RightCon>
            <img src="https://cdn-icons-png.flaticon.com/128/1659/1659682.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" alt="" />
          </RightCon>
        </SubContent>
      </Content>
      <HR />
      <Bottom>
        <LeftB>
        <h4>Resources recommendations</h4>
        <h6>Based on your Resources alerts, activity, and profile.
          <span className='blue'>Learn more.</span> </h6>
        </LeftB>
        <RightB>
           {/* <span className='gray'>On</span> */}
          <Switch>
            <input />
            <span></span>
          </Switch>
        </RightB>
      </Bottom>
      <HR />
      <button>Done</button>
    </Popup>
  )
}


