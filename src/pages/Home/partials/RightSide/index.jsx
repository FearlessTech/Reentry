import {
  Container,
  FollowCard,
  Title,
  FeedList,
  BannerCard,
} from './styles.jsx';

const Rightside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Reentry Reading Material</h2>
        </Title>
        <FeedList>
          <a
            href={'https://www.namimaine.org/'}
            target='_blank' //Open in new tab
            rel='noreferrer'
          >
            National Alliance on Mental Illness (NAMI), Maine
          </a>
          <a
            href={'https://re-entrymaine.org/'}
            target='_blank' //Open in new tab
            rel='noreferrer'
          >
            Maine Prisoner Re-Entry Network (MPRN)
          </a>
          <a
            href={'https://www.maineprisoneradvocacy.org/'}
            target='_blank' //Open in new tab
            rel='noreferrer'
          >
            Maine Prisoner Advocacy Coalition (MPAC)
          </a>
          <a
            href={'https://www.planstreetinc.com/reentry-a-new-way-of-life/'}
            target='_blank' //Open in new tab
            rel='noreferrer'
          >
            Four Key Elements to Successful Reentry
          </a>
          <a
            href={
              'https://civilrights.org/resource/barriers-to-successful-re-entry-of-formerly-incarcerated-people/'
            }
            target='_blank' //Open in new tab
            rel='noreferrer'
          >
            Barriers to Successful Re-Entry
          </a>
          <a
            href={
              'https://www.apa.org/pi/ses/resources/indicator/2018/03/prisons-to-communities'
            }
            target='_blank' //Open in new tab
            rel='noreferrer'
          >
            Assist an Inmate with Successfully Reentry
          </a>
          <a
            href={
              'https://www.trendwyoming.org/articles/helping-family-member-reintegrate-after-prison-release/'
            }
            target='_blank' //Open in new tab
            rel='noreferrer'
          >
            5 Tips to Help Your Reentry
          </a>
        </FeedList>
      </FollowCard>
      <BannerCard>
        <img src='/images/2of3.png' alt='' />
      </BannerCard>
    </Container>
  );
};

export default Rightside;
