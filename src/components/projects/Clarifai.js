import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';
import ClarifaiLib from 'clarifai';
import $ from 'jquery';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import c3 from 'c3';
const app = new ClarifaiLib.App({
	apiKey: 'fe578d618cf24fcc87df096b29b1d41f'
});
const data = {
	columns: [
		['data1', 30],
		['data2', 120],
	],
	type: 'pie',
};

export default class Clarifai extends React.Component {
	constructor(props) {
		super(props);
		this.state = { colors: [], link: 'http://kamui.ml:8000', data: {} };
	}
	componentDidMount = () => {
		this.chart = c3.generate({
			bindto: '#chart',
			data: {
				columns: [
				],
				type: 'pie'
			}
		});
		var handleResponse = this.handleResponse;
		function readFile() {

			if (this.files && this.files[0]) {

				var FR = new FileReader();

				FR.addEventListener("load", function (e) {
					document.getElementById("img").src = e.target.result;
					app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", e.target.result.split(',')[1]).then(
						handleResponse,
						function (err) {
							// there was an error
							console.log(err);
						}
					);
					// console.log(e.target.result.split(',')[1])
				});

				FR.readAsDataURL(this.files[0]);
			}

		}

		document.getElementById("inp").addEventListener("change", readFile);
	}

	handleResponse = (response) => {
		// do something with response
		let nextState = { data: { columns: [], type: 'pie', colors: {} } };
		nextState.colors = response.outputs[0].data.colors;
		let boxes = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
		let params = '';
		for (let i = 0; i < boxes.length; i++) {
			let hex = 'white';
			if (nextState.colors[i]) {
				hex = nextState.colors[i].raw_hex;
				nextState.data.columns.push([hex, nextState.colors[i].value * 100]);
				nextState.data.colors[hex] = hex;
				hex = hex.replace('#', '');
			}
			params += boxes[i] + '=' + hex + '&';
		}
		params = params.slice(0, -1);
		nextState.link = 'http://kamui.ml:8000?' + params;
		this.setState(nextState);
		this.chart.unload();
		setTimeout(this.reloadPie, 300);
		console.log(this.state);
	}

	handleClick = () => {
		console.log(this.state);
	}
	reloadPie = () => {
		this.chart.load(this.state.data);
	}
	render() {
		return (
			<div className="Clarifai">
				<Grid fluid className="container">
					<h3>Upload an image and Clarifai will show you its color densities!</h3>
					{this.state.data.columns ? <div><a className="btn red" href={this.state.link} onClick={this.handleClick}>Augmented Reality!</a>  <span>(FireFox/Edge Chrome doesn't work)</span> </div> : ''}
					<br />
					<form action="#">
						<div className="file-field input-field">
							<div className="btn">
								<span>File</span>
								<input id="inp" type="file" />
							</div>
							<div className="file-path-wrapper">
								<input className="file-path validate" type="text" />
							</div>
						</div>
					</form>
					<p id="b64"></p>
					<img id="img" style={{ maxHeight: '500px', width: 'auto' }} />
					<div id="chart"></div>
				</Grid>
			</div>
		);
	}
}