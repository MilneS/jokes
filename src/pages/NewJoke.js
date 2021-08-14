import { useEffect } from "react";
import JokeForm from "../components/jokes/JokeForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addJoke } from "../lib/api";

const NewJoke = () => {
  const { sendRequest, status } = useHttp(addJoke);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/jokes");
    }
  }, [status, history]);

  const addJokeHandler = (jokeData) => {
    sendRequest(jokeData);
  };
  return (
    <JokeForm isLoading={status === "pending"} onAddJoke={addJokeHandler} />
  );
};

export default NewJoke;
