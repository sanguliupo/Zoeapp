import React, { Component } from 'react';

class Comments extends Component {
	render() {
		return (
			<div className=" bg-light-pink dib br3 pa2 ma3 grow bw2">
				<form>
					<p className="athelas f5 ma2">Leave a comment for Zoe!</p>
					<input
						className="athelas f5"
						type="text"
						placeholder="Your name"
					/>

					<input
						type="text"
						className="commentbox"
						onChange={this.props.commentBoxChange}
					/>
					<button
						type="submit"
						className="pa1 dib helvetica f5 ma2"
						onClick={e => {
							e.preventDefault();
							this.props.onSubmit();
						}}
					>
						{this.props.submitButtonMessage}
					</button>
				</form>
			</div>
		);
	}
}

export default Comments;
