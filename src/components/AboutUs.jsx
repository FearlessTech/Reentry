import {
  Container,
  Content,
  Image,
  Info,
} from '../styles/stylesAboutUs';

const AboutUs = (props) => {
  return (
    <Container>
      <Content>
        <Info>
          <h1>User Agreement</h1>
          <p>
            This space will hold a copy of the user agreement that users will <br/>
            agree to before being allowed to interact with this site.
          </p>
        </Info>
      </Content>
      <Content>
        <Image><img src="/images/user.svg" alt=""/></Image>
        <Info>
          <h1>National Alliance of Mental Health</h1>
          <p>
            This space will be used to introduce Hale from NAMI and their involvement in this site.
          </p>
        </Info>
      </Content>
      <Content>
        <Info>
          <h1>Maine Prisoner Reentry Network</h1>
          <p>
            This space will hold info about Me, my GitHub Repo, and the <br/>
            contributors participation in the building of this site.
          </p>
        </Info>
        <Image><img src="/images/user.svg" alt=""/></Image>
      </Content>
      <Content>
        <Image><img src="/images/user.svg" alt=""/></Image>
        <Info>
          <h1>Clover Baxter and GitHub Contributors</h1>
          <p>Here is some information about us.</p>
        </Info>
      </Content>
    </Container>
  );
};

export default AboutUs;