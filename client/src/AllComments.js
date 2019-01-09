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
								className=" dib ma4 avenir sans-serif mw5  bg-white br3 pa3 pa4-ns mv3 ba b--black-10"
								key={comment.dateSent}
							>
								<p className="allcomments">{comment.user}</p>
								<p className="moment">
									{moment(comment.dateSent).fromNow()}
								</p>
								<p className="allcomments">{comment.message}</p>
							</div>
						);
					})}
				</div>
			);
		} else return null;
	}
}

export default AllComments;
