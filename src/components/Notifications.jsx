import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import {
  Container,
  Left,
  LeftDiv,
  HR,
  Middle,
  MiddleBoxes,
  MiddleContent,
  Dots,
  Right,
  RTopDiv,
  Ads,
  RightImg,
} from '../styles/stylesNotifications';

export const Notifications = () => {
  return (
    <Container>
      <Left>
        <LeftDiv>
          <h1>Notifications</h1>
          <p>You have new notifications</p>
        </LeftDiv>
        <HR />
        <LeftDiv>
          <p>Improve your notifications</p>
          <h1 >View settings</h1>
        </LeftDiv>
      </Left>

      <Middle>
        <MiddleBoxes>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHkOOrvaumGKg/profile-displayphoto-shrink_800_800/0/1632887487394?e=1651104000&v=beta&t=bXD1T5wux94Tdi-GrI6Zm7L45JoNTRK5dNpksXpFndo"
            alt=""
          />
          <MiddleContent>
            <p>Your job alert for India</p>
            <button >Connect</button>
          </MiddleContent>

          <Dots>
            <p>1d</p>
            <MoreHorizIcon marginLeft={'10px'} />
          </Dots>
        </MiddleBoxes>
        <HR />

        <MiddleBoxes>
          <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="" />
          <MiddleContent>
            <p>Your job alert for USA</p>
            <button>View Event</button>
          </MiddleContent>

          <Dots>
            <p>1d</p>
            <MoreHorizIcon marginLeft={'10px'} />
          </Dots>
        </MiddleBoxes>
        <HR />

        <MiddleBoxes>
          <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="" />
          <MiddleContent>
            <p>Your job alert for Germany</p>
            <button>See all views</button>
          </MiddleContent>

          <Dots>
            <p>1d</p>
            <MoreHorizIcon marginLeft={'10px'} />
          </Dots>
        </MiddleBoxes>
        <HR />

        <MiddleBoxes>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHYRKYBeIM7Rg/profile-displayphoto-shrink_100_100/0/1642222680344?e=1651104000&v=beta&t=lJofr2NhWemgVoiK1h6bFuVVvteMebPllDY5FFsmHWk"
            alt=""
          />
          <MiddleContent>
            <p>Your job alert for Mumbai</p>
            <button>View Event</button>
          </MiddleContent>

          <Dots>
            <p>1d</p>
            <MoreHorizIcon marginLeft={'10px'} />
          </Dots>
        </MiddleBoxes>
        <HR />
      </Middle>

      <Right>
        <RTopDiv>
          <Ads>
            {" "}
            <p>Ad</p> <MoreHorizIcon marginLeft={'10px'} />
          </Ads>
          <p >
            100 years of Japanese innovation built to meet all your needs
          </p>
          <RightImg>
            <img
              className="circle"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHYRKYBeIM7Rg/profile-displayphoto-shrink_100_100/0/1642222680344?e=1651104000&v=beta&t=lJofr2NhWemgVoiK1h6bFuVVvteMebPllDY5FFsmHWk"
              alt=""
            />
            <img
              src="https://media-exp1.licdn.com/dms/image/C510BAQEUO8H0EBcAVQ/company-logo_100_100/0/1543490756062?e=1654128000&v=beta&t=ZrRrKqq3xAnO6z_2i_eDgcaxj9z19cBvszX6BqUzkMY"
              alt=""
            />
          </RightImg>
          <p>A powerhouse for all your printing needs!</p>
          <button> Follow</button>
        </RTopDiv>
        <div>
          <p>
            {" "}
            About | Accessibility | Help Center | Privacy & Terms ⮟ | Ad
            Choices | Advertising | Business Services ⮟ | Get the MaineRR app |
            More
          </p>

          <div>
            <img
              src="https://www.adweek.com/wp-content/uploads/2019/06/linkedin-branding-CONTENT-2019-652x367.jpg"
              alt=""
            />
            <p> MaineRR Corporation © 2022</p>
          </div>
        </div>
      </Right>
    </Container>
  );
};
