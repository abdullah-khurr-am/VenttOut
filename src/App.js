import './App.css';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import SignupPage from './Components/SignupPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import {NewsFeedCard, ProfileCard} from './Components/Cards';
import NewsFeed from './Components/NewsFeed';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/afadsf" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
          <Layout>
            <Route path="/NewsFeed" component={NewsFeed}/>
            <Route path="/" component={ProfilePage}/>
          </Layout>
        </Switch>
      </Router>
      {/* <NewsFeedCard/>
      <ProfileCard/> */}
    </>
    )
}

export default App;
