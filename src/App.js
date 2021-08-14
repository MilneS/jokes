

import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewJoke = React.lazy(() => import("./pages/NewJoke"));
const JokeDetail = React.lazy(() => import("./pages/JokeDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllJokes = React.lazy(() => import("./pages/AllJokes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/jokes" />
          </Route>
          <Route path="/jokes" exact>
            <AllJokes />
          </Route>
          <Route path="/jokes/:jokeId">
            <JokeDetail />
          </Route>
          <Route path="/new-joke">
            <NewJoke />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
