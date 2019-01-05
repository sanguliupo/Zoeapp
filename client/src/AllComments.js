import React, { Component } from 'react';

class AllComments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (this.props.show === true) {
			return <div>Everyone's Comments</div>;
		} else return null;
	}
}

export default AllComments;
