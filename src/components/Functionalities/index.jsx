import { Link, Route } from 'react-router-dom';
import Parallax from './pages/Parallax';
import BirdsParallax from './pages/BirdsParallax';

const Functionalities = (props) => {
  return (
    <>
      <Route path='/functionalities/parallax'>
        <Parallax />
      </Route>
      <Route path='/functionalities/birds'>
        <BirdsParallax />
      </Route>
      <Route exact path='/functionalities'>
        <div>functionalities route</div>
        <ul>
          <li>
            <Link to='/functionalities/parallax'>parallax</Link>
            <Link to='/functionalities/birds'>birds parallax</Link>
            <Link to='/functionalities/messages'>Messages</Link>
            <Link to='/functionalities/'>Admin</Link>
          </li>
        </ul>
      </Route>
    </>
  );
};

export default Functionalities;
