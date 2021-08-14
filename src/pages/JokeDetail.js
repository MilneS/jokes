import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import useHttp from "../hooks/use-http";
import { getSingleJoke } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const JokeDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const {jokeId}= params;
  
  const {
    sendRequest,
    status,
    data: loadedJoke,
    error,
  } = useHttp(getSingleJoke, true);

  useEffect(() => {
    sendRequest(jokeId);
  }, [sendRequest, jokeId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedJoke.text) {
    return <p>No joke found!</p>
  }

  return (
    <Fragment>
      <HighlightedJoke text={loadedJoke.text} author={loadedJoke.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default JokeDetail;
