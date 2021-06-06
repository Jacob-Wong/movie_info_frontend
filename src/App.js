import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import "./App.css";

import CreateMovie from "./components/CreateMovie";
import ShowMovieList from "./components/ShowMovieList";
import ShowMovieDetails from "./components/ShowMovieDetails";
import UpdateMovieInfo from "./components/UpdateMovieInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      searchTitle: null,
    };
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  searchTitle() {
    let title = this.state.searchTitle;
    console.log("i am clicking at " + this.state.searchTitle);
    this.setState({ title: null });
    window.location.href = "http://localhost:3000/search-movie/" + title;
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Movie Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Movie List</Nav.Link>
              <Nav.Link href="/create-movie">Add Movie</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Movie Name"
                className="mr-sm-2"
                onChange={this.onChangeSearchTitle}
              />
              <Button variant="outline-success" onClick={this.searchTitle}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Router>
          <div>
            <Route exact path="/" component={ShowMovieList} />
            <Route path="/search-movie/:title" component={ShowMovieList} />
            <Route path="/create-movie" component={CreateMovie} />
            <Route path="/edit-movie/:id" component={UpdateMovieInfo} />
            <Route path="/show-movie/:id" component={ShowMovieDetails} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
