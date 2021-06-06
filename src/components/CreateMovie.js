import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class CreateMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      original_language: "",
      production_companies: "",
      overview: "",
      release_date: "",
      runtime: "",
    };
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
      .post("http://localhost:8082/api/movies", data)
      .then((res) => {
        alert("Movie Created");
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateMovie!");
      });
  };

  render() {
    return (
      <div className="CreateMovie">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Movie</h1>
              <p className="lead text-center">Create new movie</p>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
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
                  <input
                    type="text"
                    placeholder="Length of the film (min)"
                    name="runtime"
                    className="form-control"
                    value={this.state.runtime}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMovie;
