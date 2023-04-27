import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderPage from "./RenderPage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RenderPage page="login" />} />

        <Route
          exact
          path="/agreement"
          element={<RenderPage page="agreement" />}
        />

        <Route
          path="/functionalities"
          element={<RenderPage page="functionalities" />}
        />

        <Route path="/home" element={<RenderPage page="home" />} />

        <Route path="/network" element={<RenderPage page="network" />} />

        <Route path="/resources" element={<RenderPage page="resources" />} />

        <Route path="/messaging/*" element={<RenderPage page="messaging" />} />

        <Route
          path="/notifications"
          element={<RenderPage page="notifications" />}
        />

        <Route path="/profile" element={<RenderPage page="profile" />} />

        <Route path="/aboutus" element={<RenderPage page="aboutus" />} />

        <Route path="/*" element={<RenderPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
