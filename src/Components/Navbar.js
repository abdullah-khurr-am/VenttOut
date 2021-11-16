import "../styles/Navbar.css";
import notification from "../icons/notifications.png";
import { HiMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
// import motion from "framer-motion";

const Navbar = ({check,Setter}) => {
  return (
    <nav className="navbar">
      <div className="options-right">
        <ul>
          <li className="selected">Dashboard</li>
          <li style={{ marginLeft: "50px" }}>News Feed</li>
        </ul>
      </div>
      <div className="nav-icon"></div>
      <div className="options-left">
        <img src={notification} alt="" width="42px" height="42px" />
        <div className="User-Settings">
          <div className="avatar"></div>
          <div className="user">
            <h3>UserName</h3>
            <p>Profile Setting</p>
          </div>
        </div>
        <div className="hamburger">
          <HiMenu size="lg" onClick={()=>{Setter(true)}}/>
        </div>
      </div>
    </nav>
  );
};

const NavbarVertical = ({check,Setter}) => {
  return (
     <div>
       <div className="overlay" onClick={()=>{Setter(false)}}>

       </div>
       <div className="vertinavcover">
        <nav className="navbarvertical">
        <div className="hamburger" style={{width:"fit-content"}} onClick={()=>{Setter(false)}}><ImCross/></div>
          <div>
            <div className="options-left">
              <div className="User-Settings">
                <div className="avatar"></div>
                <div className="user">
                  <h3>UserName</h3>
                  <p>Profile Setting</p>
                </div>
              </div>
            </div>
            <div className="options-right">
              <ul>
                <li className="selected">Dashboard</li>
                <li>News Feed</li>
              </ul>
            </div>
          </div>
        </nav>
           </div>
     </div>
  );
};

export { Navbar, NavbarVertical };
