import "../styles/ProfilePage.css";
import karma from "../icons/karma.png";
import rank from "../icons/rank.png";
import upvotes from "../icons/upvotes.png";
import { Filters } from "./Button";
import { ProfileCard } from "./Cards";

const ProfilePage = ({ ProfileName, Posts }) => {
  return (
    <div className="mainprofilepage">
      <div className="mainprofilebody">
        <div className="uppersection">
          <div className="Welcome">
            <p>Hey Jenny,{ProfileName}</p>
            <h2>Welcome To VenttOut!</h2>
          </div>
          <div className="profiledata">
            <div className="block">
              <div>
                <p>Rank</p>
                <h2>21</h2>
              </div>
              <div
                style={{
                  background: `url(${rank})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                className="icons"
              ></div>
            </div>
            <div className="block">
              <div>
                <p>Posts</p>
                <h2>16</h2>
              </div>
              <div
                style={{
                  background: `url(${upvotes})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "70px",
                  height: "70px",
                }}
                className="icons"
              ></div>
            </div>
            <div className="block">
              <div>
                <p>Karma</p>
                <h2>3450</h2>
              </div>
              <div
                style={{
                  background: `url(${karma})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "60px",
                  height: "60px",
                }}
                className="icons"
              ></div>
            </div>
          </div>
        </div>
        <div className="profiletopnav">
          <h3>My Posts</h3>
          <div>
            <Filters />
          </div>
        </div>
        <div className="MyPosts">
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
