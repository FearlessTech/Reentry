import styled from "styled-components";

const StyledResource = styled.div`
  flex: 0 1 350px;
  max-width: 100vw;
  width: 350px;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 140px;
  .header {
    flex: 1 0 40px;
    background-color: #009999;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1.5rem;
    h4 {
      color: white;
      font-weight: 600;
    }
  }
  .bottom {
    flex: 1 1 1;
    display: flex;
    column-gap: 1rem;
    margin: 0.5rem;
    height: 80px;
    .img-wrapper {
      flex: 1 0 110px;
      height: 110px;
      width: 110px;
      border-radius: 100vmax;
      overflow: hidden;
      transform: translateY(-30px);

      img {
        width: 100%;
      }
    }
    .text {
      flex: 0 1 1;
      font-size: 14px;
      padding: 0.4rem;
    }
  }
`;

const ResourceItem = ({ type, imageSrc, description }) => {
  return (
    <StyledResource>
      <div className="header">
        <h4>{type}</h4>
      </div>
      <div className="bottom">
        <div className="img-wrapper">
          <img src={imageSrc} alt={type + " image"} />
        </div>
        <div className="text">
          <p>{description}</p>
        </div>
      </div>
    </StyledResource>
  );
};

export default ResourceItem;
