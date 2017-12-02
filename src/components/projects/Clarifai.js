import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';
import ClarifaiLib from 'clarifai';
import $ from 'jquery';
const app = new ClarifaiLib.App({
	apiKey: 'fe578d618cf24fcc87df096b29b1d41f'
});

export default class Clarifai extends React.Component {
	constructor(props) {
		super(props);
		this.state = {colors:[], link: 'http://kamui.ml:8000'};
	}
	componentDidMount = () => {
		var handleResponse = this.handleResponse;
		function readFile() {
			
			if (this.files && this.files[0]) {
				
				var FR= new FileReader();
				
				FR.addEventListener("load", function(e) {
					document.getElementById("img").src       = e.target.result;
					document.getElementById("b64").innerHTML = e.target.result;
					app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", e.target.result.split(',')[1]).then(
						handleResponse,
						function(err) {
						  // there was an error
						  console.log(err);
						}
					  );
					// console.log(e.target.result.split(',')[1])
			  }); 
			  
			  FR.readAsDataURL( this.files[0] );
			}
			
		  }
		  
		  document.getElementById("inp").addEventListener("change", readFile);
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
					<input id="inp" type='file' />
					<p id="b64"></p>
					<img id="img" height="150"/>
				</Grid>
			</div>
		);
	}
}