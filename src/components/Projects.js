import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';


export default class Projects extends React.Component {
    render() {
    return (
            <div className="Projects">
				<Grid fluid className="container">
					<ul>
						<li><Link to="/todo">ToDo</Link></li>
						<li><Link to="/aframe">AFrame</Link></li>
						<li><Link to="/clarifai">Clarifai</Link></li>
					</ul>
				</Grid>
            </div>
        );
    }
}