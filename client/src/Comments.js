import React, { Component } from 'react';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			message: ''
		};
	}

	onNameChange = event => {
		this.setState({
			name: event.target.value
		});
	};

	onMessageChange = event => {
		this.setState({
			message: event.target.value
		});
	};

	getSeeAllCommentsButton() {
		if (this.props.show === false) {
			return (
				<button
					type="submit"
					className="pa1 dib helvetica f5 ma2 br-pill"
					onClick={e => {
						e.preventDefault();
						this.props.getComments();
						this.props.onSubmit();
					}}
				>
					See all comments
				</button>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<div className=" bg-light-pink dib br3 pa3 ma3 grow bw2 tc topBar">
				<form>
					<p className="athelas f5 ma2 commentbox">
						Leave a comment for Zoe!
					</p>
					<input
						className="athelas f5"
						type="text"
						placeholder="Your name"
						onChange={this.onNameChange}
						value={this.state.name}
					/>

					<input
						type="text"
						className="commentbox"
						onChange={this.onMessageChange}
						value={this.state.message}
					/>
					<button
						type="submit"
						className="pa1 dib helvetica f5 ma2 br-pill"
						onClick={e => {
							e.preventDefault();
							this.props.onSubmit();
							if (
								this.props.submitButtonMessage ===
								'Submit your comment'
							) {
								this.props.onCommentSubmit(
									this.state.name,
									this.state.message
								);
							}

							this.setState({
								name: '',
								message: ''
							});
						}}
					>
						{this.props.submitButtonMessage}
					</button>

					{this.getSeeAllCommentsButton()}
				</form>
			</div>
		);
	}
}

export default Comments;
