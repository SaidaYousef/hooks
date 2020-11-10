import React from "react";
import MovieCard from './MovieCard/MovieCard'

const MoviesList = ({ moviesList }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {moviesList.map((movie, index) => (
        <MovieCard key={index} movie={movie} index={index}/>
      ))}
    </div>
  );
};

export default MoviesList;