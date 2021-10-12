import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProject from "./components/Project/AddProject";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/addProject" exact component={AddProject} />
        </div>
      </Router>
    );
  }
}

export default App;
