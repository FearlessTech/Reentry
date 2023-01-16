import styled from "styled-components";
const ResourceCheckBoxes = () => {
  return (
    <div>
      <CkBoxs>
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Basic Needs
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Domestic Violence
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Food
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Education
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Employment
      </CkBoxs>
      <CkBoxs>
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Housing
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Medical
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Mental Health
        <input
          type="checkbox"
          id="resources.id"
          name="resources.name"
          value="resources.id"
        />
        Transportation
      </CkBoxs>
    </div>
  );
};

const CkBoxs = styled.div`
  input {
    margin: 30px 0 30px 30px;
  }
`;
export default ResourceCheckBoxes;
