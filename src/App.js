import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";
import { client } from "./Client";
import Posts from "./components/Posts";

class App extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    client
      .getEntries({ content_type: "food" })
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <Router>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/About">About</NavLink>
        </nav>
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <div className="App">
              <div className="container">
                <header>
                  <div className="wrapper">
                    <span className="logo">Foodia</span>
                  </div>
                </header>
                <main>
                  <div className="wrapper">
                    <Posts posts={this.state.articles} />
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
