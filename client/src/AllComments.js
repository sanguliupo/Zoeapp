import React, { Component } from 'react';
const moment = require('moment');

class AllComments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (this.props.show === true && this.props.commentResponse.length) {
			return (
				<div>
					{this.props.commentResponse.map(comment => {
						return (
							<div
								className="br2 ba ba b--dotted bw2 b--red mv4 dib ma4 avenir sans-serif white "
								key={comment.dateSent}
							>
								<p className="allcomments">
									User: {comment.user}
								</p>
								<p className="moment">
									{moment(comment.dateSent).fromNow()}
								</p>
								<p className="allcomments">
									Comment: {comment.message}
								</p>
							</div>
						);
					})}
				</div>
			);
		} else return null;
	}
}

export default AllComments;
