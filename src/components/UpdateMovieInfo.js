import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class UpdateMovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      original_language: "",
      production_companies: "",
      overview: "",
      release_date: "",
      runtime: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/movies/" + this.props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, movie: res.data})
        this.setState({
          title: res.data.title,
          original_language: res.data.original_language,
          production_companies: res.data.production_companies,
          overview: res.data.overview,
          release_date: res.data.release_date,
          runtime: res.data.runtime,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateMovieInfo");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      original_language: this.state.original_language,
      production_companies: this.state.production_companies,
      overview: this.state.overview,
      release_date: this.state.release_date,
      runtime: this.state.runtime,
    };

    axios
      .put(
        "http://localhost:8082/api/movies/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-movie/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateMovieInfo!");
      });
  };

  render() {
    return (
      <div className="UpdateMovieInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Movie</h1>
              <p className="lead text-center">Update Movie's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Title of the Movie"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="original_language">Language</label>
                <input
                  type="text"
                  placeholder="Language"
                  name="original_language"
                  className="form-control"
                  value={this.state.original_language}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="production_companies">Author</label>
                <input
                  type="text"
                  placeholder="Production Company"
                  name="production_companies"
                  className="form-control"
                  value={this.state.production_companies}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="overview">Description</label>
                <input
                  type="text"
                  placeholder="Describe this movie"
                  name="overview"
                  className="form-control"
                  value={this.state.overview}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="release_date">Release Date</label>
                <input
                  type="date"
                  placeholder="release_date"
                  name="release_date"
                  className="form-control"
                  value={this.state.release_date}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="runtime">Length</label>
                <input
                  type="text"
                  placeholder="Length of the film (min)"
                  name="runtime"
                  className="form-control"
                  value={this.state.runtime}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateMovieInfo;
