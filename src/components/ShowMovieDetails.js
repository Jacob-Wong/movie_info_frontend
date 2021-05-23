import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class showMovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/movies/" + this.props.match.params.id)
      .then((res) => {
        // console.log("Print-showMovieDetails-API-response: " + res.data);
        this.setState({
          movie: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowMovieDetails");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("http://localhost:8082/api/movies/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error form ShowMovieDetails_deleteClick");
      });
  }

  render() {
    const movie = this.state.movie;
    let MovieItem = (
      <div>
        <table className="table table-hover table-dark">
          {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Title</td>
              <td>{movie.title}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Language</td>
              <td>{movie.original_language}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Company</td>
              <td>{movie.production_companies}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Overview</td>
              <td>{movie.overview}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Release Date</td>
              <td>{movie.release_date}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Length of the film (min)</td>
              <td>{movie.runtime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className="ShowMovieDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Movie List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Movie's Record</h1>
              <p className="lead text-center">View Movie's Info</p>
              <hr /> <br />
            </div>
          </div>
          <div>{MovieItem}</div>

          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, movie._id)}
              >
                Delete Movie
              </button>
              <br />
            </div>

            <div className="col-md-6">
              <Link
                to={`/edit-movie/${movie._id}`}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Movie
              </Link>
              <br />
            </div>
          </div>
          {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Movie</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Movie</button> */}
        </div>
      </div>
    );
  }
}

export default showMovieDetails;
