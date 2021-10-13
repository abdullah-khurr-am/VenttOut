import "../styles/Navbar.css";

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
                <img src="../icons/notifications.png" width="42px" height="42px" />
            </div>
        </nav>
     );
}
 
export default Navbar;
