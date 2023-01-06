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
        <Image>
          <iframe
            width="460"
            height="275"

            src="https://www.youtube.com/embed/pBy1zgt0XPc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </Image>
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
        <Image><img src="/images/MPRNaboutme2.jpg" alt=""/></Image>
        <Info>
          <h1>Maine Prisoner Reentry Network (MRRN)</h1>
          <a>https://re-entrymaine.org/</a>
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
          <h1>The Maine Prisoner Advocacy Coalition (MPAC)</h1>
          <a>https://www.maineprisoneradvocacy.org/</a>
          <p>
            The Maine Prisoner Advocacy Coalition (MPAC) is committed to ethical, <br/>
            positive, and humane changes in Maine's prison system.
          </p>
          <br/>
          <p>
            Our Mission is to support and advocate for Maine’s incarcerated citizens, their families and friends. <br/>

            Our Purpose is to reduce Maine’s use of incarceration by advocating for a legal system that is ethical,
            humane, and restorative. <br/>

            Our Vision is of a justice system that is restorative. It supports humanity in every person, and reflects
            and creates transformation and accountability.
          </p>
          <br/>
          <p>
            Today, MPAC is continuing the mission of our founders. Every day our staff is engaging with incarcerated
            individuals or their families about challenges they are encountering. Every day our staff and volunteers
            directly advocate for, and support people as they negotiate the trauma-filled environments of our legal
            system. Every day we support incarcerated individuals as they prepare for the transition to reenter society.
            Every day our staff and volunteers are supporting someone negotiating reentry to help them overcome a
            barrier of lifetime sanctions. Join us to support this vital work and help us reach our fundraising goal of
            $25,000. To donate please send the check to Maine Prisoner Advocacy Coalition PO Box 446 Lisbon Maine 04250!
          </p>
        </Info>
        <Image><img src="/images/MPACaboutme.jpg" alt=""/></Image>
      </Content>

      <Content>
        <Info>
          <h1>User Agreement</h1>
          <p>
            This space will hold a copy of the user agreement that users will <br/>
            agree to before being allowed to interact with this site.
          </p>
        </Info>
      </Content>
    </Container>
  );
};

export default AboutUs;