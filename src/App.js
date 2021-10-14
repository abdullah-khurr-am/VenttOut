import './App.css';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import SignupPage from './Components/SignupPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import NewsFeed from './Components/NewsFeed';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
          <Layout>
            <Route path="/NewsFeed" component={NewsFeed}/>
          </Layout>
        </Switch>
      </Router>
    </>
    )
}

export default App;
