import { Link, Route, Switch as Routes } from "react-router-dom";
import Parallax from "./pages/Parallax";
import BirdsParallax from "./pages/BirdsParallax";
import Network from "./pages/Network";
import NotFound from "../Fallbacks/NotFound";

const Functionalities = (props) => {
  return (
    <>
      <Routes>
        <Route path="/functionalities/parallax">
          <Parallax />
        </Route>
        <Route path="/functionalities/birds">
          <BirdsParallax />
        </Route>
        <Route path="/functionalities/network">
          <Network />
        </Route>
        <Route exact path="/functionalities">
          <div>functionalities route</div>
          <ul>
            <li>
              <Link to="/functionalities/parallax">parallax</Link>
              <Link to="/functionalities/birds">birds parallax</Link>
            </li>
          </ul>
        </Route>
        <Route path="/functionalities/*">
          <NotFound />
        </Route>
      </Routes>
    </>
  );
};

export default Functionalities;
