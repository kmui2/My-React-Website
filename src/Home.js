import React from 'react';
import './App.css';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'font-awesome/css/font-awesome.min.css';
import { Parallax } from 'react-parallax';


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                {/* <!-- SHOWCASE --> */}
                <section id="showcase">
                    <Parallax bgImage={require('./images/madison.jpg')} strength={400}>
                        <Grid fluid className="container">
                            <Row className="center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
                                <Col xs={10} sm={10} md={10} lg={7} className="showcase-content">

                                    <img src={require('./images/profile.jpg')} id="profile-pic" />
                                    <h1>Welcome to <span className="primary-text">AppTheme</span></h1>
                                    <p>A template built with HTML5, CSS3 and Flexboxgrid</p>
                                </Col>
                            </Row>
                        </Grid>
                    </Parallax>
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
                                        <i className="fa fa-dashboard"></i><br />
                                        <h4>Fully Optimized</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-question-circle-o"></i><br />
                                        <h4>Free Support</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-rocket"></i><br />
                                        <h4>Free upgrades</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </Col>
                                </Row>

                                {/* <!-- ICON ROW 2 --> */}
                                <Row className="center-xs center-sm center-md center-lg">
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-line-chart"></i><br />
                                        <h4>UpTime Guarantee</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-users"></i><br />
                                        <h4>Multi-User</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-plug"></i><br />
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
                                <img src={require("./images/iphone.png")} alt="" />
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
            </div>
        );
    }
}

export default Home;