import React from 'react';
import './App.css';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'font-awesome/css/font-awesome.min.css';


class About extends React.Component {
    render() {
        return (
            <div className="About">

                {/* <!-- SUBHEADER --> */}
                <section id="subheader">
                    <Grid fluid className="container">
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h1>About Us</h1>
                            </Col>
                        </Row>
                    </Grid>
                </section>

                {/* <!-- MAIN PAGE --> */}
                <section id="page" className="about">
                    <Grid fluid class="container">
                        <Row className="center-xs center-sm center-md center-lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h2><span class="primary-text">Who</span> We Are</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <hr />
                                <h2><span class="primary-text">What</span> We Do</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default About;