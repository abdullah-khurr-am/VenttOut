import Navbar from "./Navbar";
import '../styles/NewsFeed.css'
import { NewsFeedCard } from "./Cards";

const NewsFeed = () => {
    return (
        <>
        <div className="body">
            <NewsFeedCard/>
            <NewsFeedCard/>
            <NewsFeedCard/>
            <NewsFeedCard/>
        </div>
        </>
     );
}
 
export default NewsFeed;