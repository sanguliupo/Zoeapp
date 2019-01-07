import React, { Component } from 'react';

class VotingResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (this.props.show === true && this.props.voteResponse.length) {
			this.props.voteResponse.forEach(vote => {
				this.props.data[vote.photoId].count = vote.count;
			});

			return (
				<div>
					{this.props.data.map(photo => {
						return (
							<div className="tc bg-light-blue dib br3 pa2 ma3 bw2 shadow-5">
								<img src={require(`${photo.url}`)} />
								<p>number of votes: {photo.count}</p>
							</div>
						);
					})}
				</div>
			);
		} else return null;
	}
}

export default VotingResults;
