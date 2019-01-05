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
const HEADER_TYPE = {
	'Content-Type': 'application/json'
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ month: 'zero', url: './photos/0.JPG' },
				{ month: 'one', url: './photos/1 month.JPG' },
				{ month: 'two', url: './photos/2 months.jpeg' },
				{ month: 'three', url: './photos/3 months.jpeg' },
				{ month: 'four', url: './photos/4 months.JPG' },
				{ month: 'five', url: './photos/5 months.jpeg' },
				{ month: 'six', url: './photos/6 months.JPG' },
				{ month: 'seven', url: './photos/7 months.JPG' },
				{ month: 'eight', url: './photos/8 months.JPG' },
				{ month: 'nine', url: './photos/9 months.JPG' },
				{ month: 'ten', url: './photos/10 months.JPG' },
				{ month: 'eleven', url: './photos/11 months.JPG' }
			],
			searchfield: '',
			showCardList: true,
			totalVote: 0,
			buttonMessage: 'See vote results',
			showVotingResults: false,
			commentbox: '',
			showAllComments: false,
			submitButtonMessage: 'Submit'
			// commentResponse: ''
		};
	}

	componentDidMount() {
		this.getComments().catch(error => console.error(error));
	}

	getComments = async () => {
		const response = await fetch(COMMENT_API_URL);
		const commentResponse = await response.text();
		this.setState({ commentResponse });
	};

	onCommentSubmit = async () => {
		const testMessage = `Test @ ${new Date().toString()}`;
		const response = await fetch(COMMENT_API_URL, {
			method: 'POST',
			headers: HEADER_TYPE,
			body: JSON.stringify({ user: 'Vanessa', message: testMessage })
		});
		const commentResponse = await response.text();
		this.setState({ commentResponse });
	};

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	onVoteClick = () => {
		this.setState({ totalVote: this.state.totalVote + 1 });
	};

	onVoteResultsClick = () => {
		if (this.state.showCardList == true) {
			this.setState({
				buttonMessage: 'Return to previous page',
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

	onCommentBoxChange = event => {
		this.setState({ commentbox: event.target.value });
	};

	onSubmit = () => {
		debugger;
		if (this.state.showCardList == true) {
			this.setState({
				submitButtonMessage: 'Return to previous page',
				showAllComments: true,
				showVotingResults: false,
				showCardList: false
			});
		} else {
			this.setState({
				submitButtonMessage: 'Submit',
				showAllComments: false,
				showVotingResults: false,
				showCardList: true
			});
		}
	};

	render() {
		console.log('this.state.commentResponse', this.state.commentResponse);
		const { data, searchfield } = this.state;
		const filteredData = data.filter(data => {
			return data.month.toLowerCase().includes(searchfield.toLowerCase());
		});

		return (
			<div className="App tc">
				<h1 className="f1 tc">Zoe by month</h1>
				<div className="flex justify-center bg-washed-red">
					<Comments
						commentBoxChange={this.onCommentBoxChange}
						onSubmit={this.onSubmit}
						submitButtonMessage={this.state.submitButtonMessage}
					/>
					<SearchBar searchChange={this.onSearchChange} />
					<Vote
						totalVote={this.state.totalVote}
						onVoteResultsClick={this.onVoteResultsClick}
						buttonMessage={this.state.buttonMessage}
					/>
				</div>

				<Scroll>
					<CardList
						show={this.state.showCardList}
						data={filteredData}
						onVoteClick={this.onVoteClick}
						totalVote={this.state.totalVote}
					/>
					<AllComments show={this.state.showAllComments} />
					<VotingResults show={this.state.showVotingResults} />
				</Scroll>
			</div>
		);
	}
}

export default App;
