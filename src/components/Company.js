import React from 'react';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'font-awesome/css/font-awesome.min.css';


export default class Company extends React.Component {
    render() {
        return (
            <div className="Company">
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
            </div>
        );
    }
}
