import React from 'react';
import './App.css';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Home.js';
import Header from './Header.js';
import Company from './Company.js';
import Footer from './Footer.js';
import About from './About.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
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
