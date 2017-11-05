import React from 'react';
import './App.css';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'font-awesome/css/font-awesome.min.css';


class Header extends React.Component {
    render() {
        return (
            <div className="Header">
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
            </div>
        );
    }
}

export default Header;