import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Vote from './Vote';
import Comments from './Comments';
import AllComments from './AllComments';
import VotingResults from './VotingResults';
import CardList from './CardList';
import Scroll from './Scroll';

const COMMENT_API_URL = '/api/comment';
const VOTE_API_RUL = '/api/vote';
const HEADER_TYPE = {
	'Content-Type': 'application/json'
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ month: 'zero', url: './photos/0.JPG', photoId: 0, count: 0 },
				{
					month: 'one',
					url: './photos/1 month.JPG',
					photoId: 1,
					count: 0
				},
				{
					month: 'two',
					url: './photos/2 months.JPG',
					photoId: 2,
					count: 0
				},
				{
					month: 'three',
					url: './photos/3 months.jpeg',
					photoId: 3,
					count: 0
				},
				{
					month: 'four',
					url: './photos/4 months.JPG',
					photoId: 4,
					count: 0
				},
				{
					month: 'five',
					url: './photos/5 months.jpeg',
					photoId: 5,
					count: 0
				},
				{
					month: 'six',
					url: './photos/6 months.JPG',
					photoId: 6,
					count: 0
				},
				{
					month: 'seven',
					url: './photos/7 months.JPG',
					photoId: 7,
					count: 0
				},
				{
					month: 'eight',
					url: './photos/8 months.JPG',
					photoId: 8,
					count: 0
				},
				{
					month: 'nine',
					url: './photos/9 months.JPG',
					photoId: 9,
					count: 0
				},
				{
					month: 'ten',
					url: './photos/10 months.JPG',
					photoId: 10,
					count: 0
				},
				{
					month: 'eleven',
					url: './photos/11 months.JPG',
					photoId: 11,
					count: 0
				}
			],
			searchfield: '',
			showCardList: true,
			totalVote: 0,
			buttonMessage: 'See vote results',
			showVotingResults: false,
			commentbox: '',
			showAllComments: false,
			submitButtonMessage: 'Submit your comment',
			commentResponse: '',
			voteResponse: ''
		};
	}

	getComments = async () => {
		const response = await fetch(COMMENT_API_URL);
		const responseText = await response.text();
		const commentResponse = JSON.parse(responseText);
		this.setState({ commentResponse });
	};

	onCommentSubmit = async (name, message) => {
		const response = await fetch(COMMENT_API_URL, {
			method: 'POST',
			headers: HEADER_TYPE,
			body: JSON.stringify({ user: name, message: message })
		});
		const responseText = await response.text();
		const commentResponse = JSON.parse(responseText);

		this.setState({ commentResponse });
	};

	getVotes = async () => {
		const response = await fetch(VOTE_API_RUL);
		const voteResponseText = await response.text();
		const voteResponse = JSON.parse(voteResponseText);
		this.setState({ voteResponse });
	};

	onVoteSubmit = async photoId => {
		// const { votedPhotoIds } = this.state;
		// const testPhotoIds = [9, 9, 9];
		const response = await fetch(VOTE_API_RUL, {
			method: 'POST',
			headers: HEADER_TYPE,
			body: JSON.stringify({ votedPhotoIds: [photoId] })
		});
		const voteResponseText = await response.text();
		const voteResponse = JSON.parse(voteResponseText);
		this.setState({ voteResponse });
	};

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	onVoteClick = () => {
		this.setState({ totalVote: this.state.totalVote + 1 });
	};

	onVoteResultsClick = () => {
		if (this.state.showCardList === true) {
			this.setState({
				buttonMessage: 'Return to home page',
				showVotingResults: true,
				showAllComments: false,
				showCardList: false
			});
		} else if (this.state.showAllComments === true) {
			this.setState({
				buttonMessage: 'Return to home page',
				submitButtonMessage: 'Submit your comment',
				showVotingResults: true,
				showAllComments: false,
				showCardList: false
			});
		} else {
			this.setState({
				buttonMessage: 'See vote results',
				showVotingResults: false,
				showAllComments: false,
				showCardList: true
			});
		}
	};

	onSubmit = () => {
		if (this.state.showCardList === true) {
			this.setState({
				submitButtonMessage: 'Return to home page',
				showAllComments: true,
				showVotingResults: false,
				showCardList: false
			});
		} else if (this.state.showVotingResults === true) {
			this.setState({
				buttonMessage: 'Return to home page',
				submitButtonMessage: 'Submit your comment',
				showVotingResults: false,
				showAllComments: true,
				showCardList: false
			});
		} else {
			this.setState({
				submitButtonMessage: 'Submit your comment',
				showAllComments: false,
				showVotingResults: false,
				showCardList: true
			});
		}
	};

	render() {
		const { data, searchfield } = this.state;
		const filteredData = data.filter(data => {
			return data.month.toLowerCase().includes(searchfield.toLowerCase());
		});

		return (
			<div>
				<h1 className="f1 tc">Zoe by month</h1>
				<div className="flex flex-wrap justify-center bg-washed-red">
					<Comments
						commentBoxChange={this.onCommentBoxChange}
						onSubmit={this.onSubmit}
						submitButtonMessage={this.state.submitButtonMessage}
						onCommentSubmit={this.onCommentSubmit}
						getComments={this.getComments}
						show={this.state.showAllComments}
					/>
					<SearchBar searchChange={this.onSearchChange} />
					<Vote
						totalVote={this.state.totalVote}
						onVoteResultsClick={this.onVoteResultsClick}
						buttonMessage={this.state.buttonMessage}
						getVotes={this.getVotes}
					/>
				</div>

				<Scroll>
					<CardList
						show={this.state.showCardList}
						data={filteredData}
						onVoteClick={this.onVoteClick}
						totalVote={this.state.totalVote}
						onVoteSubmit={this.onVoteSubmit}
					/>
					<AllComments
						show={this.state.showAllComments}
						commentResponse={this.state.commentResponse}
					/>
					<VotingResults
						show={this.state.showVotingResults}
						voteResponse={this.state.voteResponse}
						data={this.state.data}
					/>
				</Scroll>
			</div>
		);
	}
}

export default App;
