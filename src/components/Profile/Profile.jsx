import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ResourceTree from './ResourceTree';
import data from '../data/resources.json';

import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';

import { useState, useRef } from 'react';
import db from '../../firebase';

import ResourceCheckBoxes from '../ResourceCheckBoxes';

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
} from './stylesProfile.jsx';
import Leftside from '../Home/Leftside';

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
            <Content>
              <form onSubmit={handleSubmit}>
                <label>
                  Enter your number:
                  <input
                    type='text'
                    name='phonenumber'
                    value={inputs.phonenumber || ''}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Enter your City:
                  <input
                    type='text'
                    name='city'
                    value={inputs.city || ''}
                    onChange={handleChange}
                  />
                </label>
                <input type='submit' />
              </form>
            </Content>
          </PFContactInfo>
          <PFAchievments>
            <PFHeading>Achievments</PFHeading>
            <Content>
              <form onSubmit={handleSubmit}>
                <label>
                  Achievment 1:
                  <input
                    type='text'
                    name='achievment1'
                    value={inputs.achievment1 || ''}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Achievment 2:
                  <input
                    type='text'
                    name='achievment2'
                    value={inputs.achievment2 || ''}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Achievment 3:
                  <input
                    type='text'
                    name='achievment3'
                    value={inputs.achievment3 || ''}
                    onChange={handleChange}
                  />
                </label>
                <input type='submit' />
              </form>
            </Content>
          </PFAchievments>
          <PFGoals>
            <PFHeading>Goals</PFHeading>
            <Content>
              <form onSubmit={handleSubmit}>
                <label>
                  Goal 1:
                  <input
                    type='text'
                    name='goal1'
                    value={inputs.goal1 || ''}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Goal 2:
                  <input
                    type='text'
                    name='goal2'
                    value={inputs.goal2 || ''}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Goal 3:
                  <input
                    type='text'
                    name='goal3'
                    value={inputs.goal3 || ''}
                    onChange={handleChange}
                  />
                </label>
                <input type='submit' />
              </form>
            </Content>
          </PFGoals>
        </Leftside>
      </ProfileLeft>

      <ProfileMain>
        <PFIntro>
          <PFHeading>Introductions</PFHeading>
          <Content>
            <form
            // onSubmit={(e) => {
            // e.preventDefault();

            // const text = intro.current.value.trim();
            // if (text.length)
            // (async () => {
            //   const query = db.collection('users').where('uid', '==', props.user.uid);
            //   await query.get().then((payload) => {
            //     const docRef = payload.docs[0].ref();
            //     docRef.update({
            //       intro: intro.current.value
            //     })
            //   })
            // })();
            // }}
            >
              {edition && (
                <>
                  <textarea
                    id='intro'
                    name='intro'
                    rows='5'
                    cols='110'
                    ref={intro}
                  />
                  <input type='submit' value='Submit' />
                </>
              )}
            </form>
            <IoMdSettings
              onClick={(e) => setEdition(!edition)}
              size={20}
              style={{ margin: '8px', fill: '#009999' }}
            />
          </Content>
        </PFIntro>
        <PFCheckBoxes>
          <PFHeading>Resources Check Boxes</PFHeading>
          <Content>
            {/* <ResourceCheckBoxes /> */}
            <ResourceTree data={data} />
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
