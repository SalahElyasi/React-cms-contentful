import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Food from "./components/Food";
import "./App.css";
import { client } from "./Client";
import Posts from "./components/Posts";

import Blogposts from "./components/Blogposts";

import { FiLoader } from "react-icons/fi";

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
          <div className="App">
          <ul>
          {this.state.articles.map((article, index) => (
            <li key={index}>
              <a href={`#${article.fields.slug}`}>{article.fields.name}</a>
            </li>
          ))}
        </ul>
            <div className="container">
              <header>
                <div className="wrapper">
                  <span className="logo">
                    Foodia{" "}
                    {!this.state.isLoading && <FiLoader className="loading" />}
                  </span>
                </div>
              </header>
              <main>
                <div className="wrapper">
                  <Posts posts={this.state.articles} />
                  {console.log("------>", this.state.articles[1])}
                </div>
              </main>
            </div>
          </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

// comment
