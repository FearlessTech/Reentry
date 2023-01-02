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
          <h1>Clover Baxter and GitHub Contributors</h1>
          <p>Here is some information about us.</p>
        </Info>
      </Content>

      <Content>
        <Info>
          <h1>National Alliance of Mental Health (NAMI)</h1>
          <p>
            Our Mission: Through support, education, and advocacy NAMI Maine is dedicated to building better lives
            for the 1 in 4 Mainers who are affected by mental illness.
          </p>
          <br/>
          <p>
            Our History: NAMI was formed in 1977 when two mothers, each with a son with schizophrenia, met over
            lunch to discuss their shared experiences and challenges. At a second lunch the women decided to
            assemble people with similar concerns.
          </p>
          <br/>
          <p>
            NAMI Maine offers compassion and provides social/emotional support for all persons affected by mental
            illness and advocates for improved quality of services for all persons affected by mental illness.
            NAMI Maine educates, inform, and provide resources for and about mental illness, raises public awareness
            and promote understanding of mental illness, promotes the importance of peer support for all persons
            affected by mental illness, Trains volunteers and professionals, and Fosters a statewide network of
            affiliates and support groups,
          </p>
        </Info>
        <Image><img src="/images/NAMIaboutme.png"  alt=""/></Image>
      </Content>

      <Content>
        <Image><img src="/images/MPRNaboutme.jpg" alt=""/></Image>
        <Info>
          <h1>Maine Prisoner Reentry Network</h1>
          <p>
            In June of 2017, 5 people gathered together at the Catholic Charities office in Auburn, Maine to discuss
            how they might support citizens returning to the community after incarceration. Word that this discussion
            was happening spread, and within months, dozens of people from all over the state—people from non-profits,
            the corrections system, social service agencies, faith based organizations, law enforcement, recovery
            services, formerly and currently incarcerated, and more—began attending and contributing to these monthly meetings.
          </p>
          <br/>
          <p>
            It became apparent that there are numerous organizations(silos) doing amazing work assisting returning
            citizens, but most did not know each other, or how their work fit into the bigger picture of coordinated
            re-entry services.
          </p>
          <br/>
          <p>
            Rather than continue to have people from as far away continue to come to Auburn every month, MPRN Founder,
            Bruce Noddin, decided to start holding meetings in other cities throughout Maine, so more people could
            learn about the resources, develop relationships, and create a team approach to re-entry in their community.
          </p>
        </Info>
      </Content>
      <Content>
        <Info>
          <h1>Clover Baxter and GitHub Contributors</h1>
          <p>Here is some information about us.</p>
        </Info>
        <Image><img src="/images/user.svg" alt=""/></Image>
      </Content>
    </Container>
  );
};

export default AboutUs;