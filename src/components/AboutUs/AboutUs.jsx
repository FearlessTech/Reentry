import {
  Container,
  Content,
  Image,
  Info,
  AUHeading,
  Description,
} from "./stylesAboutUs";

const AboutUs = (props) => {
  return (
    <Container>
      <Content>
        <Image>
          <img src="/images/Fearless.png" alt="" />
        </Image>
        <Info>
          <AUHeading>
            <h1>FearlessTech & Contributors</h1>
          </AUHeading>
          <Description>
            <a
              href="https://github.com/FearlessTech"
              target="_blank" //Open in new tab
              rel="noreferrer"
            >
              FrealessTech
            </a>
            <p>
              FearlessTech is a brought to life by Clover Baxter while she was
              incarcerated at Maine Correctional Center in Windham, Maine. While
              she was attending MPRN, NAMI, and MPAC meetings, plus thru her own
              search for reentry resources, she recoginized this communitys need
              for a more efficent way to locate these resources.
            </p>
            <br />
            <p>
              With the permission of the facilitys Unit Manager she partnered
              with these 3 Orginizations. Using the tech skills she learned
              while in prison, Clover started building the Prisoner Reentry
              Advocates website. She turned this build into an open source
              project on GitHub.com, for Kind Souls from all over the would
              contribute and collaborate.
            </p>
            <br />
            <p>
              These amazingly talented Colaborators made this website for you!
              Yes, you! The person reading this right now. FearlessTech hopes
              that you will find the resources you need excatly when you need
              them. Reather your an advocate trying to help someone or just a
              person in need, we were happy to help!
            </p>
            <p>
              If you would like to leave the members of FearlessTech a message,
              give feedback about the website, or request a new feature, please
              see our discussionss page at
              <a href="https://github.com/orgs/FearlessTech/discussions/5">
                {" "}
                FearlessTech Discussions #5
              </a>
              .
            </p>
          </Description>
        </Info>
      </Content>

      <Content>
        <Info>
          <AUHeading>
            <h1>National Alliance of Mental Health (NAMI)</h1>
          </AUHeading>
          <Description>
            <a
              href={"https://www.namimaine.org/"}
              target="_blank" //Open in new tab
              rel="noreferrer"
            >
              National Alliance on Mental Illness (NAMI), Maine
            </a>
            <p>
              Our Mission: Through support, education, and advocacy NAMI Maine
              is dedicated to building better lives for the 1 in 4 Mainers who
              are affected by mental illness.
            </p>
            <br />
            <p>
              Our History: NAMI was formed in 1977 when two mothers, each with a
              son with schizophrenia, met over lunch to discuss their shared
              experiences and challenges. At a second lunch the women decided to
              assemble people with similar concerns.
            </p>
            <br />
            <p>
              NAMI Maine offers compassion and provides social/emotional support
              for all persons affected by mental illness and advocates for
              improved quality of services for all persons affected by mental
              illness. NAMI Maine educates, inform, and provide resources for
              and about mental illness, raises public awareness and promote
              understanding of mental illness, promotes the importance of peer
              support for all persons affected by mental illness, Trains
              volunteers and professionals, and Fosters a statewide network of
              affiliates and support groups,
            </p>
          </Description>
        </Info>
        <Image>
          <img src="/images/NAMIaboutme.jpg" alt="" />
        </Image>
      </Content>

      <Content>
        <Image>
          <img src="/images/MPRNaboutme2.jpg" alt="" />
        </Image>
        <Info>
          <AUHeading>
            <h1>Maine Prisoner Reentry Network (MRRN)</h1>
          </AUHeading>
          <Description>
            <a
              href={"https://re-entrymaine.org/"}
              target="_blank" //Open in new tab
              rel="noreferrer"
            >
              Maine Prisoner Re-Entry Network (MPRN)
            </a>
            <p>
              In June of 2017, 5 people gathered together at the Catholic
              Charities office in Auburn, Maine to discuss how they might
              support citizens returning to the community after incarceration.
              Word that this discussion was happening spread, and within months,
              dozens of people from all over the state—people from non-profits,
              the corrections system, social service agencies, faith based
              organizations, law enforcement, recovery services, formerly and
              currently incarcerated, and more—began attending and contributing
              to these monthly meetings.
            </p>
            <br />
            <p>
              It became apparent that there are numerous organizations(silos)
              doing amazing work assisting returning citizens, but most did not
              know each other, or how their work fit into the bigger picture of
              coordinated re-entry services.
            </p>
            <br />
            <p>
              Rather than continue to have people from as far away continue to
              come to Auburn every month, MPRN Founder, Bruce Noddin, decided to
              start holding meetings in other cities throughout Maine, so more
              people could learn about the resources, develop relationships, and
              create a team approach to re-entry in their community.
            </p>
          </Description>
        </Info>
      </Content>
      <Content>
        <Info>
          <AUHeading>
            <h1>The Maine Prisoner Advocacy Coalition (MPAC)</h1>
          </AUHeading>
          <Description>
            <a
              href={"https://www.maineprisoneradvocacy.org/"}
              target="_blank" //Open in new tab
              rel="noreferrer"
            >
              Maine Prisoner Advocacy Coalition (MPAC)
            </a>
            <p>
              The Maine Prisoner Advocacy Coalition (MPAC) is committed to
              ethical, <br />
              positive, and humane changes in Maine's prison system.
            </p>
            <br />
            <p>
              Our Mission is to support and advocate for Maine’s incarcerated
              citizens, their families and friends. <br />
              Our Purpose is to reduce Maine’s use of incarceration by
              advocating for a legal system that is ethical, humane, and
              restorative. <br />
              Our Vision is of a justice system that is restorative. It supports
              humanity in every person, and reflects and creates transformation
              and accountability.
            </p>
            <br />
            <p>
              Today, MPAC is continuing the mission of our founders. Every day
              our staff is engaging with incarcerated individuals or their
              families about challenges they are encountering. Every day our
              staff and volunteers directly advocate for, and support people as
              they negotiate the trauma-filled environments of our legal system.
              Every day we support incarcerated individuals as they prepare for
              the transition to reenter society. Every day our staff and
              volunteers are supporting someone negotiating reentry to help them
              overcome a barrier of lifetime sanctions. Join us to support this
              vital work and help us reach our fundraising goal of $25,000. To
              donate please send the check to Maine Prisoner Advocacy Coalition
              PO Box 446 Lisbon Maine 04250!
            </p>
          </Description>
        </Info>
        <Image>
          <img src="/images/MPACaboutme.jpg" alt="" />
        </Image>
      </Content>
    </Container>
  );
};

export default AboutUs;
