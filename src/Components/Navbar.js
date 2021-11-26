import "../styles/Navbar.css";
import notification from "../icons/notifications.png";
import { HiMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";
// import motion from "framer-motion";

const Navbar = ({ check, Setter }) => {
  const [selected, SetSelected] = useState("newsfeed");

  return (
    <nav className="navbar">
      <div className="options-right">
        <ul>
          <Link to="ProfilePage">
            <li
              className={selected === "dashboard" ? "selected" : ""}
              onClick={() => SetSelected("dashboard")}
            >
              Dashboard
            </li>
          </Link>
          <Link to="NewsFeed">
            <li
              className={selected === "newsfeed" ? "selected" : ""}
              style={{ marginLeft: "50px" }}
              onClick={() => SetSelected("newsfeed")}
            >
              News Feed
            </li>
          </Link>
        </ul>
      </div>
      <div className="nav-icon"></div>
      <div className="options-left">
        <img
          className="notification"
          src={notification}
          alt=""
          width="35px"
          height="35px"
        />
        <div className="User-Settings">
          <div className="avatar"></div>
          <div className="user">
            <h3>UserName</h3>
            <p>Profile Setting</p>
          </div>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            Setter(true);
          }}
        ></div>
      </div>
    </nav>
  );
};

const NavbarVertical = ({ check, Setter }) => {

  const [selected, SetSelected] = useState("newsfeed");


  return (
    <div>
      <div
        className="overlay"
        onClick={() => {
          Setter(false);
        }}
      ></div>
      <div className="vertinavcover">
        <nav className="navbarvertical">
          <div
            className="hamburger"
            style={{ width: "fit-content" }}
            onClick={() => {
              Setter(false);
            }}
          >
            <ImCross />
          </div>
          <div>
            <div className="options-left">
              <div className="Verti-User-Settings">
                <div className="avatar"></div>
                <div className="user">
                  <h3>UserName</h3>
                  <p>Profile Setting</p>
                </div>
              </div>
            </div>
            <div className="options-right">
              <ul>
                <Link to="ProfilePage">
                  <li
                    className={selected === "dashboard" ? "selected" : ""}
                    onClick={() => SetSelected("dashboard")}
                  >
                    Dashboard
                  </li>
                </Link>
                <Link to="NewsFeed">
                  <li
                    className={selected === "newsfeed" ? "selected" : ""}
                    onClick={() => SetSelected("newsfeed")}
                  >
                    News Feed
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { Navbar, NavbarVertical };
