import React, { Component } from 'react';

class Comments extends Component {
	render() {
		if (this.props.show === true) {
			return (
				<div className="tc bg-light-yellow dib br3 pa2 ma3 grow bw2 shadow-5">
					<form>
						<h3 className="athelas f4 tc">Leave a comment</h3>
						<input type="text" />
					</form>
				</div>
			);
		} else return null;
	}
}

export default Comments;
