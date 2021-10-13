import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

import Navbar from "./components/Navbar";
import Food from "./components/Food";
import Home from "./components/Home";
import "./App.css";
import { client } from "./Client";

import Blogposts from "./components/Blogposts";
import Footer from './components/Footer';




class App extends React.Component {
  state = {
    articles: [],
    isLoading: false,
  };

  componentDidMount() {
    client
      .getEntries({ content_type: "food" })
      .then((response) => {
        // console.log(response);
        this.setState({
          articles: response.items,
        });
        this.setState({
          isLoading: true,
        });
      })
      .catch(console.error);
  }
  componentWillUnmount() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <Router>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Blogposts">Blog</NavLink>
        </nav>
        <Navbar articles={this.state.articles} />
        <Switch>
          <Route exact path="/Food/:slug">
            <Food posts={this.state.articles} />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route path="/Blogposts">
            <Blogposts />
          </Route>
          <Route path="/Food">
            <Food posts={this.state.articles} />
          </Route>
          <Route exact path="/">
            <Home
              isLoading={this.state.isLoading}
              articles={this.state.articles}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
       
    );
  }
}

export default App;

// comment
