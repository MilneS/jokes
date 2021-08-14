import { useEffect } from "react";
import JokeList from "../components/jokes/JokeList";
import useHttp from "../hooks/use-http";
import { getAllJokes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoJokesFound from '../components/jokes/NoJokesFound';


const AllJokes = () => {
  const {
    sendRequest,
    status,
    data: loadedJokes,
    error,
  } = useHttp(getAllJokes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedJokes || loadedJokes.length === 0)) {
    return <NoJokesFound />;
  }

  return <JokeList jokes={loadedJokes} />;
};

export default AllJokes;
