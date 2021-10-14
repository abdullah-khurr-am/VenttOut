import "../styles/Navbar.css";
import notification from "../icons/notifications.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="options-right">
        <ul>
          <li className="selected">Dashboard</li>
          <li>News Feed</li>
          <li>Posts</li>
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
      </div>
    </nav>
  );
};

export default Navbar;
