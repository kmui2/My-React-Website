import React from 'react';
import './App.css';
import './materialize/materialize.scss';
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Company from './components/Company.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import ToDo from './components/projects/ToDo.js';
import Projects from './components/Projects.js';
import AFrame from './components/projects/AFrame.js';
import Clarifai from './components/projects/Clarifai.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <Navbar />
          <div id="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/todo" component={ToDo} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/aframe" component={AFrame} />
            <Route exact path="/clarifai" component={Clarifai} />
          </div>
          <Company />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
