/* eslint-disable jsx-a11y/anchor-is-valid */

// I want this to show links to news articles relivant to 
// reentry in maine. Under the link I want to see the date 
// it was posted to this site and how many people ahve clicked on it.


// const top_1 = [
//     "Difficulties in finding and securing housing?",
//     "4 Elements of Successful Reentry Programs for Inmates",
//     "Formerly incarcerated face barriers to successfully re-entering society",
//     "Factors that have the most significant impact on reentry success",
//     "Reentry programs are designed to assist incarcerated individuals with a successful transition to their community after they are released",
//   ];
  
//   const top_2 = [
//     "The problem of prisoner (re) entry ",
//     "Is criminal justice education ready for reentry?",
//     "Research about Recidivism and Reentry",
//     "A scheme to invest in released prisoners—literally",
//   ];
  
import styled from 'styled-components';

const Rightside = (props) => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>

                <FeedList>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Reentry</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>

                <Recommendation>
                    View all recommendations
                    <img src="/images/right-icon.svg" alt="" />
                </Recommendation>                
            </FollowCard>

            <BannerCard>
                <img src="/images/Reentry.jpg" alt="" />
            </BannerCard>
        </Container>
    );
};

const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 2px 3px 2px -2px rgba(110,104,104,0.75);
    padding: 12px;
`;

const Title =styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
    margin-top: 16px;
    
    li {
        display: flex;
        align-items: center;
        margin: 12px;
        position: relative;
        font-size: 14px;

        & > div {
            display: flex;
            flex-direction: column;
        }

        button {
            background-color: transparent;
            color: rgba(0, 0, 0, 0.6);
            box-shadow: 2px 3px 0px -2px rgba(110,104,104,0.75) inset;
            padding: 16px;
            align-items: center;
            border-radius: 15px;
            box-sizing: border-box;
            font-weight: 600;
            display: inline-flex;
            justify-content: center;
            max-height: 32px;
            max-width: 480px;
            text-align: center;
            outline: none;

            &:hover {
                background-color: rgba(0,0,0,0.08);
                cursor: pointer;
            }
        }
    }
`;

const Avatar = styled.div`
    background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;
    margin-right: 8px;
`;

const Recommendation = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
    img {
        width: 100%;
        height: 100%;
    }
`;

export default Rightside;