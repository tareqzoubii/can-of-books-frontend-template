import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <Header />
          <Routes>
           <Route 
              exact path="/"
              element={isAuthenticated? <BestBooks /> : <Welcome />}
            >
            </Route>
            <Route 
              exact path="/Profile"
              element={isAuthenticated && <Profile />}
            >
            </Route>
            <Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
