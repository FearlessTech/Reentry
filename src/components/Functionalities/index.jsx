import { Link, Route } from 'react-router-dom';
import Paralax from './pages/Paralax';

const Functionalities = (props) => {
  return (
    <>
      <Route path='/functionalities/paralax'>
        <Paralax />
      </Route>
      <Route exact path='/functionalities'>
        <div>functionalities route</div>
        <ul>
          <li>
            <Link to='/functionalities/paralax'>paralax</Link>
          </li>
        </ul>
      </Route>
    </>
  );
};

export default Functionalities;
