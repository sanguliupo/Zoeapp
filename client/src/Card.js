import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			voteCount: 0
		};
	}

	render() {
		return (
			<div className="tc bg-light-yellow dib br3 pa2 ma3 bw2 shadow-5">
				<img
					alt={`${this.props.month} month Zoe`}
					src={require(`${this.props.photoUrl}`)}
				/>

				<h3 className="athelas f4 tc">Month: {this.props.month} </h3>
				<button
					disabled={this.props.totalVote >= 3 ? true : false}
					type="submit"
					className="ba b--pink pa1 dib"
					onClick={() => {
						this.props.onVoteClick();
						this.props.onVoteSubmit(this.props.photoId);
						this.setState({
							voteCount: this.state.voteCount + 1
						});
					}}
				>
					Vote
				</button>
			</div>
		);
	}
}

export default Card;
