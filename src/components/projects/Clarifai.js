import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';
import ClarifaiLib from 'clarifai';
const app = new ClarifaiLib.App({
	apiKey: 'fe578d618cf24fcc87df096b29b1d41f'
});

export default class Clarifai extends React.Component {
	constructor(props) {
		super(props);
		this.state = {colors:[], link: 'http://kamui.ml:8000'};
	}
	componentDidMount = () => {
		app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", "https://samples.clarifai.com/metro-north.jpg").then(
			this.handleResponse,
			function(err) {
			  // there was an error
			  console.log(err);
			}
		  );
	}

	handleResponse = (response) => {
		// do something with response
		let nextState = {};
		nextState.colors = response.outputs[0].data.colors;
		let boxes = ['box1','box2','box3','box4','box5','box6','box7','box8','box9'];
		let params = '';
		for (let i = 0; i < boxes.length; i++) {
			let hex = 'white';
			if (nextState.colors[i])
				hex = nextState.colors[i].raw_hex.replace('#','');
			params+=boxes[i]+'='+hex+'&';
		}
		params = params.slice(0,-1);
		nextState.link = 'http://kamui.ml:8000?'+params;
		this.setState(nextState);
		console.log(this.state);
	}

	handleClick = () => {
		console.log(this.state);
	}
	render() {
		return (
			<div className="Clarifai">
				<Grid fluid className="container">
					Welcome to clarifai component
					<a href={this.state.link} onClick={this.handleClick}>Click me!</a>
				</Grid>
			</div>
		);
	}
}