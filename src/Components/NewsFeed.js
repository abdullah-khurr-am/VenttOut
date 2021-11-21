import Navbar from "./Navbar";
import "../styles/NewsFeed.css";
import { NewsFeedCard } from "./Cards";
import { Filters } from "./Button";

const NewsFeed = () => {
  return (
    <>
      <div className="body">
        <div className="newsfeedtitle">My News Feed</div>
        <CreatePost />
      </div>
    </>
  );
};

const CreatePost = () => {
  return (
    <div className="newsfeedbody">
      <h5>Create Post</h5>
      <div className="createspace">
        <div className="safespace">
          <div className="safespacetitle">
            <p>Anything in your mind? Lets share!</p>
          </div>
          <div className="createposticon"></div>
        </div>
      </div>
      <div className="filters">
        <Filters />
      </div>
      <div className="newsfeedposts">
        <NewsFeedCard
          genusername="Charles Robbie"
          time="12:30 PM"
          date="Apr 21, 2021"
          likes="12.3k"
          comments="7"
          share="20"
          headline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          minus voluptates aliquam sint magni quis quo amet perferendis"
          subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur possimus pariatur nihil qui consequatur ut vitae illum aut reprehenderit quaerat, sint, natus repellendus adipisci nisi eaque vero, sunt officia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur possimus pariatur nihil qui consequatur ut vitae illum aut reprehenderit quaerat, sint, natus repellendus adipisci nisi eaque vero, sunt officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur possimus pariatur nihil qui consequatur ut vitae illum aut reprehenderit quaerat, sint, natus repellendus adipisci nisi eaque vero, sunt officia?"
        />
        <NewsFeedCard
          genusername="Charles Robbie"
          time="12:30 PM"
          date="Apr 21, 2021"
          likes="12.3k"
          comments="7"
          share="20"
          headline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          minus voluptates aliquam sint magni quis quo amet perferendis"
          subtext="Lorem ipsum dolor sit amet"
        />
      </div>
    </div>
  );
};

export default NewsFeed;
