import classes from './HighlightedJoke.module.css';

const HighlightedJoke = (props) => {
  return (
    <figure className={classes.joke}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedJoke;
