import React from "react";
import Posts from "./Posts";
import { FiLoader } from "react-icons/fi";

const Home = ({ articles, isLoading }) => {
  console.log(articles);
  console.log(isLoading);
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wrapper">
            <span className="logo">
              Foodia {!isLoading && <FiLoader className="loading" />}
            </span>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Posts posts={articles} />
            {console.log("------>", articles[1])}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
