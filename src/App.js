import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import { moviesData } from "./components/MoviesData";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import AddMovie from "./components/AddMovie/AddMovie";

import "./App.css";
import Description from "./components/Description/Description";

function App() {
  const [moviesList, SetMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);

  const AddNewMovie = (x) => SetMoviesList([...moviesList, x]);

  return (
    <Router>
      <div className="App">
        <Header
          setNameSearch={setNameSearch}
          rateSearch={rateSearch}
          setRateSearch={setRateSearch}
        />
        <MoviesList
          moviesList={moviesList.filter(
            (el) =>
              el.rating >= rateSearch &&
              el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
          )}
        />
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/description" exact component={Description}/>
          </Switch>
        <AddMovie AddNewMovie={AddNewMovie} />
      </div>
    </Router>
  );
}

export default App;