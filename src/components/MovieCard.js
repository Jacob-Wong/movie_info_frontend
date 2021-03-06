import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import img from "./show.jpg";

const MovieCard = (props) => {
  const movie = props.movie;

  return (
    <div className="card-container">
      <img
        // src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
        src={img}
        alt="movie icon"
      />
      <div className="desc">
        <h2>
          <Link to={`/show-movie/${movie._id}`}>{movie.title}</Link>
        </h2>
        <h3>{movie.production_companies}</h3>
        <p>{movie.original_language}</p>
      </div>
    </div>
  );
};

export default MovieCard;
