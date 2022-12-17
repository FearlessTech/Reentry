import "./RightBottom.css"
import styled from 'styled-components';
import { connect } from 'react-redux';



import{VscLink} from "react-icons/vsc"
export const RightBottom =(props)=>{
    return (
        <div className="bottommain">

            <a id="tagline">People who might intrest you</a>
              <div className="bottomsup">

                  <div className="details">
                      <div id="picbg">
                  <Photo>
                      {props.user && props.user.photoURL ? (
                          <img src={props.user.photoURL} alt="" />
                      ) : (
                              <img src="/images/user.svg" alt=""/>
                          )}
                  </Photo>
                  </div>
                 
                  <a className="name" >{props.user ? props.user.displayName : "Name"}</a>

                  <h5>Aspiring Developer</h5>
                  <a className="hi"><VscLink/>1 mutual connection</a>

                  <button className="button1">Connect</button>
                  </div>
                  </div>
        </div>
    )
};

const Photo = styled.div`
    img {
        box-shadow: none;
        width: 72px;
        height: 72px;
        box-sizing: border-box;
        background-clip: content-box;
        background-color: #ffffff;
        background-position: center;
        background-size: 60%;
        background-repeat: no-repeat;
        border: 2px solid #ffffff;
        margin : -38px auto 12px;
        border-radius: 50%;
    }
`;

const mapStateToProps = (state) => {
  return {
      user: state.userState.user,
  };
};

export default connect(mapStateToProps)(RightBottom);