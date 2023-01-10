import { Container } from "./styled";
import Navbar from "../../../Navbar";

const Parallax = (props) => {
  return (
    <Container>
      <Navbar />
      <div className="wrapper">
        <div className="left-box">
          <div className="left-content"></div>
        </div>
        <main className="main-panel">
          <div className="main-content"></div>
        </main>
      </div>
    </Container>
  );
};

export default Parallax;
