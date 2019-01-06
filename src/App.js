import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBar from './SearchBar';
import Comments from './Comments';

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
			showComments: false,
			totalVote: 0
		};
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	onVoteClick = () => {
		console.log('totalVote', this.state.totalVote);
		this.setState({ totalVote: this.state.totalVote + 1 });
	};

	render() {
		const { data, searchfield } = this.state;
		const filteredData = data.filter(data => {
			return data.month.toLowerCase().includes(searchfield.toLowerCase());
		});

		return (
			<div className="App tc">
				<h1 className="athelas f1 tc">Zoe by month</h1>
				<SearchBar searchChange={this.onSearchChange} />
				<button
					onClick={() => {
						this.setState({
							showCardList: false,
							showComments: true
						});
					}}
				>
					Leave a comment for Zoe!
				</button>
				<p>Vote for your favorite pictures (up to 3 votes)</p>
				<p>You have voted {this.state.totalVote} times</p>
				<br />
				<Scroll>
					<CardList
						show={this.state.showCardList}
						data={filteredData}
						onVoteClick={this.onVoteClick}
					/>
					<Comments show={this.state.showComments} />
				</Scroll>
			</div>
		);
	}
}

export default App;
