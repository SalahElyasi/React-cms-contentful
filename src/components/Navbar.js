import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

const Navbar = ({ articles }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#6495ED" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars-close">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData &&
              SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            <hr />
            {articles &&
              articles.map((article, index) => (
                <li key={index} className="nav-text-link">
                  <a href={`#${article.fields.slug}`}>{article.fields.name}</a>
                </li>
              ))}
          </ul>
          <ul></ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
