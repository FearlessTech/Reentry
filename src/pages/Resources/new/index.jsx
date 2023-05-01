import Container from "./styles";
import Searchbar from "./partials/Searchbar";
import Collapsable from "./partials/Collapsable";
import Tree from "../../Profile/partials/ResourceTree";

const Resources = (props) => {
  return (
    <Container>
      <div className="container">
        <div className="sidebar">
          <section className="search-bar">
            <Searchbar>Search for resources</Searchbar>
          </section>
          <Collapsable>
            <Tree />
          </Collapsable>
          <Collapsable>
            <Tree />
          </Collapsable>
        </div>
        <div className="results"></div>
      </div>
    </Container>
  );
};

export default Resources;
