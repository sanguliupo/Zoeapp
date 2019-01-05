import React, { Component } from 'react';

class VotingResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (this.props.show === true) {
			return <div>Voting Results</div>;
		} else return null;
	}
}

export default VotingResults;
