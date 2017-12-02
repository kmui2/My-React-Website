import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {
    render() {
    return (
            <div className="Navbar">
                {/* <!-- Navbar --> */}
                <header id="main-header">
                    <Grid fluid className="container">
                        <Row className="end-sm end-md end-lg bottom-xs bottom-xs bottom-sm bottom-md bottom-lg">
                            <Col xs={12} sm={3} md={3} lg={3} id="name">
                                <h1><span className="primary-text">Kevin</span> Mui</h1>
                            </Col>
                            <Col xs={12} sm={9} md={9} lg={9} id="col-nav">
                                <div id="navbar">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/projects">Projects</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </header>
            </div>
        );
    }
}