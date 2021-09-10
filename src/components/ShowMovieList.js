import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import MovieCard from "./MovieCard";

class ShowMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    let title = this.props.match.params.title;
    if (title === undefined || title === "null") {
      title = "";
      console.log("no params detected");
    } else {
      console.log(`the title is ${title}`);
    }

    axios
      .get(
        "https://movie-info-backend-api.herokuapp.com/api/movies?title=" + title
      )
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowMovieList");
      });
  }

  render() {
    const movies = this.state.movies;
    console.log("PrintMovie: " + movies);
    let movieList;

    if (!movies) {
      movieList = "there is no movie record!";
    } else {
      movieList = movies.map((movie, k) => <MovieCard movie={movie} key={k} />);
    }

    return (
      <div className="ShowMovieList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Movies List</h2>
            </div>

            <div className="col-md-11">
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{movieList}</div>
        </div>
      </div>
    );
  }
}

export default ShowMovieList;
