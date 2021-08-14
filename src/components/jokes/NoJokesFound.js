import classes from './NoJokesFound.module.css';
import { Link } from 'react-router-dom';

const NoJokesFound = () => {
  return (
    <div className={classes.nojokes}>
      <p>No jokes found!</p>
      <Link className='btn' to='/new-joke'>
        Add a joke
      </Link>
    </div>
  );
};

export default NoJokesFound;
