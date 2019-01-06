import React, { Component } from 'react';

class AllComments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log('this.props', this.props);
		if (this.props.show === true && this.props.commentResponse.length) {
			return (
				<div>
					{this.props.commentResponse.map(x => {
						return (
							<>
								<p>User: {x.user}</p>
								<p>Comment: {x.message}</p>
								<p>Time: {x.dateSent}</p>
							</>
						);
					})}
				</div>
			);
		} else return null;
	}
}

export default AllComments;
