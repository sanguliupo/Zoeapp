import React, { Component } from 'react';

class AllComments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (this.props.show === true && this.props.commentResponse.length) {
			return (
				<div>
					{this.props.commentResponse.map(x => {
						return (
							<div className="br2 ba ba b--dotted bw2 b--black-10 mv4 dib ma4">
								<p>User: {x.user}</p>
								<p>Comment: {x.message}</p>
							</div>
						);
					})}
				</div>
			);
		} else return null;
	}
}

export default AllComments;
