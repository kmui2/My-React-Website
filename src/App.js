import React from 'react';
import './App.css';
import './images/iphone.png';
import { Grid, Row, Col} from 'react-flexbox-grid';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">


          {/* <!-- HEADER --> */}
          <header id="main-header">
            <Grid fluid className="container">
              <Row className="end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
                <Col xs={12} sm={2} md={2} lg={2}>
                  <h1><span className="primary-text">App</span>Theme</h1>
                </Col>
                <Col xs={12} sm={10} md={10} lg={10}>
                  <nav id="navbar">
                    <ul>
                      <li className="current"><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Grid>
          </header>

          {/* <!-- SHOWCASE --> */}
          <section id="showcase">
            <Grid fluid className="container">
              <Row className="center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                <Col xs={10} sm={10} md={10} lg={7} className="showcase-content">
                  <h1>Welcome to <span className="primary-text">AppTheme</span></h1>
                  <p>A template built with HTML5, CSS3 and Flexboxgrid</p>
                </Col>
              </Row>
            </Grid>
          </section>

          {/* <!-- FEATURES --> */}
          <section id="features">
            <Grid fluid className="container">
              <Row className="center-xs center-sm center-md center-lg">
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <h2>Core Features</h2>
                    <p>What's Included</p>

                    {/* <!-- ICON ROW 1 --> */}
                    <Row className="center-xs center-sm center-md center-lg">
                      <Col xs={12} sm={4} md={4} lg={4}>
                        <i className="fa fa-dashboard"></i><br/>
                        <h4>Fully Optimized</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4}>
                        <i className="fa fa-question-circle-o"></i><br/>
                        <h4>Free Support</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4}>
                        <i className="fa fa-rocket"></i><br/>
                        <h4>Free upgrades</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </Col>
                    </Row>

                    {/* <!-- ICON ROW 2 --> */}
                    <Row className="center-xs center-sm center-md center-lg">
                      <Col xs={12} sm={4} md={4} lg={4}>
                        <i className="fa fa-line-chart"></i><br/>
                        <h4>UpTime Guarantee</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4}>
                        <i className="fa fa-users"></i><br/>
                        <h4>Multi-User</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4}>
                        <i className="fa fa-plug"></i><br/>
                        <h4>Plug & Play</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                      </Col>
                    </Row>

                  </Col>
              </Row>
            </Grid>
          </section>



          {/* <!-- INFO SECTION --> */}
          <section id="info">
            <Grid fluid className="container">
              <Row className="center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                <Col xs={12} sm={6} md={6} lg={6}>
                  <img src={require("./images/iphone.png")} alt=""/>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <h2>Core Features</h2>
                  <ul>
                    <li><i className="fa fa-check"></i> Fully Optimized</li>
                    <li><i className="fa fa-check"></i> Free Support</li>
                    <li><i className="fa fa-check"></i> Free Upgrades</li>
                    <li><i className="fa fa-check"></i> UpTime Guarantee</li>
                    <li><i className="fa fa-check"></i> Mulitple Users</li>
                    <li><i className="fa fa-check"></i> Plug & Play</li>
                  </ul>
                </Col>
              </Row>
            </Grid>
          </section>

          {/* <!-- COMPANY --> */}
          <section id="company">
            <Grid fluid className="container">
              <Row>
                <Col xs={12} sm={4} md={4} lg={4}>
                  <h4>Contact Us</h4>
                  <ul>
                    <li><i className="fa fa-phone"></i> (617) 555-5555</li>
                    <li><i className="fa fa-envelope"></i> support@apptheme.test</li>
                    <li><i className="fa fa-map"></i> 400 Main st, Boston MA</li>
                  </ul>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}>
                  <h4>About Us</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}>
                  <h4>Newsletter</h4>
                  <p>Lorem ipsum dolor sit amet</p>
                  <form>
                    <input type="text" name="email" placeholder="Enter Email" />
                    <button type="submit" name="button">Submit</button>
                  </form>
                </Col>
              </Row>
            </Grid>
          </section>

          {/* <!-- FOOTER --> */}
          <footer id="main-footer">
            <Grid fluid className="container">
              <Row className="center-xs center-sm center-md center-lg">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <p>Copyright &copy; 2017 | AppTheme</p>
                </Col>
              </Row>
            </Grid>
          </footer>

      </div>
    );
  }
}

export default App;
