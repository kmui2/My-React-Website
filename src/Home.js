import React from 'react';
import './App.css';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'react-bootstrap';
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
                                    <h1>Welcome to <span className="primary-text">Kevin Mui's</span> Website</h1>
                                    <p>Full Stack NodeJS Developer<br/> Computer Science and Engineering Major</p> <br />
                                    <Button href="https://www.overleaf.com/read/xvnsdhxjxyzw" bsStyle="primary" bsSize="large">Resume</Button>
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
                                <h2>Skills</h2>

                                {/* <!-- ICON ROW 1 --> */}
                                <Row className="center-xs center-sm center-md center-lg">
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-github"></i><br />
                                        <h4>GitHub User</h4>
                                        <p>Personal and Work Experience with using VC, especially GitHub.</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-laptop"></i><br />
                                        <h4>Object Oriented Programing</h4>
                                        <p>Knowledge in OOP languages including Python, Java, and C++.</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-server"></i><br />
                                        <h4>Backend Development</h4>
                                        <p>Database and Server/API management using NodeJS and MongoDB.</p>
                                    </Col>
                                </Row>

                                {/* <!-- ICON ROW 2 --> */}
                                <Row className="center-xs center-sm center-md center-lg">
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-database"></i><br />
                                        <h4>SQL Database Management</h4>
                                        <p>Worked on creating schemas and queries using SQLite and building a DMS using C++.</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-html5"></i><br />
                                        <h4>Frontend Development</h4>
                                        <p>Experience in HTML/CSS/JS and web frameworks ReactJS and Angular</p>
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <i className="fa fa-android"></i><br />
                                        <h4>Mobile</h4>
                                        <p>Learning how to build Android Apps using Android Studio and ReactNative</p>
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