import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';



export default class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">{/* <!-- FOOTER --> */}
                <footer id="main-footer">
                    <Grid fluid className="container">
                        <Row className="center-xs center-sm center-md center-lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <p>Copyright &copy; 2017 | Kevin Mui</p>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
            </div>
        );
    }
}