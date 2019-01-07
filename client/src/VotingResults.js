import React, { Component } from 'react';

class VotingResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log('this.props.voteResponse', this.props);
		if (this.props.show === true && this.props.voteResponse.length) {
			return (
				<div>
					{this.props.voteResponse.map(x => {
						return (
							<div className="br2 ba ba b--dotted bw4 b--black-10 mv4 w-100 w-50-m w-25-l  dib ma4">
								<p>photo Id: {x.photoId}</p>

								<p>number of votes: {x.count}</p>
							</div>
						);
					})}
				</div>
			);
		} else return null;
	}
}

export default VotingResults;
