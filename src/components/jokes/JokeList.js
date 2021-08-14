import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import JokeItem from "./JokeItem";
import classes from "./JokeList.module.css";

const sortJokes = (jokes, ascending) => {
  return jokes.sort((jokeA, jokeB) => {
    if (ascending) {
      return jokeA.id > jokeB.id ? 1 : -1;
    } else {
      return jokeA.id < jokeB.id ? 1 : -1;
    }
  });
};

const JokeList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams= new URLSearchParams(location.search);
  const isSortingAscending= queryParams.get('sort') === 'asc';

  const sortedJokes= sortJokes(props.jokes, isSortingAscending)

  const changeSortingHandler = () => {
    history.push(`${location.pathname}?sort=${(isSortingAscending? 'desc' : 'asc')}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending': 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedJokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            author={joke.author}
            text={joke.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JokeList;
