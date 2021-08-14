import classes from './JokeItem.module.css';
import {Link} from 'react-router-dom';

const JokeItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockjoke>
          <p>{props.text}</p>
        </blockjoke>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/jokes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default JokeItem;
