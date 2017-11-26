import React from 'react';
import './images/iphone.png';
import { Grid, Row, Col } from 'react-flexbox-grid';


const List = props => (
	<ul>
	  {
		props.items.map((item, index) => <li key={index}>{item}</li>)
	  }
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
			<form onSubmit={this.onSubmit}>
			  <input value={this.state.term} onChange={this.onChange} />
			  <button>Submit</button>
			</form>
			<List items={this.state.items} />
		  </div>
		);
	  }
}