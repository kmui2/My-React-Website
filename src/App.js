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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home /> */}
        <About />
        <Company />
        <Footer />
      </div>
    );
  }
}

export default App;
