import React from 'react';
import {Button, Icon, Input} from 'react-materialize'
import { Grid, Row, Col } from 'react-flexbox-grid';


const List = props => (
	<ul>
		{props.items.map((item, index) => <li key={index}><h4>{item} <Button floating className='red' small waves='light' icon='delete' onClick={props.handleDelete.bind(this,index)}>[X]</Button></h4></li>)}
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
					<form onSubmit={this.onSubmit}>
						<Input label="New Item" s={6} value={this.state.term} onChange={this.onChange} required/>
						<Button>Submit</Button>
					</form>
					<List handleDelete={this.handleDelete} items={this.state.items} />
				</Grid>
			</div>
		);
	}
}