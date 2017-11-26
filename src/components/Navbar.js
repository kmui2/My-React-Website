import React from 'react';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {
    render() {
    return (
            <div className="Navbar">
                {/* <!-- Navbar --> */}
                <header id="main-header">
                    <Grid fluid className="container">
                        <Row className="end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
                            <Col xs={12} sm={3} md={3} lg={3}>
                                <h1><span className="primary-text">Kevin</span> Mui</h1>
                            </Col>
                            <Col xs={12} sm={9} md={9} lg={9}>
                                <nav id="navbar">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/todo">ToDo</Link></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Grid>
                </header>
            </div>
        );
    }
}