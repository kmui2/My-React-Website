import React from 'react';
import {Button, Icon} from 'react-materialize'
import { Grid, Row, Col } from 'react-flexbox-grid';


const List = props => (
	<ul>
		{props.items.map((item, index) => <li key={index}>{item}<a href="#" onClick={props.handleDelete.bind(this,index)}>[X]</a></li>)}
	</ul>
);

export default class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			items: []
		};
	}

	handleDelete = (index) => {
		this.state.items.splice(index, 1);
		this.setState(this.state);
	}

	onChange = (event) => {
		this.setState({ term: event.target.value });
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.setState({
			term: '',
			items: [...this.state.items, this.state.term]
		});
	}

	render() {
		return (
			<div className="ToDo">
				<Grid fluid className="container">
					<Button waves='light'>
						<Icon>thumb_up</Icon>
					</Button>
					<form onSubmit={this.onSubmit}>
						<input value={this.state.term} onChange={this.onChange} />
						<button>Submit</button>
					</form>
					<List handleDelete={this.handleDelete} items={this.state.items} />
				</Grid>
			</div>
		);
	}
}