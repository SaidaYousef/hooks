import React from "react";
import { Link } from "react-router-dom";
import Rate from "../Rate";
import './MovieCard.css'

const MovieCard = ({movie : {name, image, date, description, rating}, index}) => {
  return (
    <div className="container">
      <div className="movie">
        <div className="movie-rating">
            <Rate rating={rating}/>
        </div>
        <div className="movie-img">
          <img src={image} alt="movie poster" />
        </div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h2>{name}</h2>
              <ul className="movie-gen">
                <p>{date}</p>
              </ul>
            </div>
          </div>
          <div className="mr-grid summary-row">
            <h5>SUMMARY</h5>
            <p>{description}</p>
          </div>
          <div className="mr-grid action-row">
            <div className="col2">
              <div className="watch-btn">
                <h3> <Link to="/Description"/> WATCH TRAILER</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;