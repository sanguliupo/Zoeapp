import React, { Component } from 'react';

class VotingResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="tc bg-light-pink dib br3 pa3 ma3 bw2  athelas f5 topBar">
				<p>Vote for your favorite pictures (up to 3 votes)</p>
				<p>You have voted {this.props.totalVote} times</p>
				<button
					type="submit"
					className="pa1 dib helvetica br-pill"
					onClick={() => {
						this.props.onVoteResultsClick();
						this.props.getVotes();
					}}
				>
					{this.props.buttonMessage}
				</button>
			</div>
		);
	}
}

export default VotingResults;
