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
import db, { storage } from "../../../../services/firebase/firebase.js";
import { useState } from "react";
import { useEffect } from "react";

const Leftside = (props) => {
  const [file, setFile] = useState(null);
  function handleClick(e) {
    // (async () => {
    //   const query = db.collection('users').where('uid', '==', props.user.uid);
    //   await query.get().then((payload) => {
    //     const data = payload.docs[0].data()
    //   });
    // })();
  }

  useEffect(() => {
    function getFileExt(file) {
      console.log(file);
    }
  }, [file]);

  // useEffect(() => {
  //   if (!file) return;
  //   async () => {
  //     //
  //     const fileExt = getFileExt(file);
  //     const uid = crypto.randomUUID();
  //     storage.ref(`/images/${uid}`);
  //   };
  // }, [file]);

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
                onChange={() => {
                  setFile();
                }}
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
      {props.children}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(Leftside);
