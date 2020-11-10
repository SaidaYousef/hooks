import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import { moviesData } from "./components/MoviesData";

import Header from "./components/Header/Header";
import AddMovie from "./components/AddMovie/AddMovie";

import "./App.css";

function App() {
  const [moviesList, SetMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);

  const AddNewMovie = (x) => SetMoviesList([...moviesList, x]);

  return (
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
      <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  );
}

export default App;