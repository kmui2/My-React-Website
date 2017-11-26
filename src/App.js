import React from 'react';
import './App.css';
import './images/iphone.png';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Company from './components/Company.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" /> */}
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Company />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
