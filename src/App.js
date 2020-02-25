import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";

import Home from "./pages/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import ContactPortfolio from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={ContactPortfolio} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
