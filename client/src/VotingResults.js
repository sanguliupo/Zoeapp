import React, { Component } from 'react';

import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
	Legend
} from 'recharts';

class VotingResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onClick = () => {
		debugger;
	};
	render() {
		if (this.props.show === true && this.props.voteResponse.length) {
			this.props.voteResponse.forEach(vote => {
				// update the this.props.data for photo rendering
				this.props.data[vote.photoId].count = vote.count;
			});

			const chartData = this.props.data.map((photoDatum, index) => {
				return {
					count: photoDatum.count,
					name: `month ${index} `
				};
			});

			return (
				<div>
					<BarChart
						className="BarChart"
						width={1000}
						height={1200}
						data={chartData}
						layout="vertical"
						barSize={30}
					>
						<CartesianGrid strokeDasharray="1 3" />
						<XAxis type="number" dataKey="count" />
						<YAxis type="category" dataKey="name" />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="count"
							fill="#ffccef"
							onClick={this.onClick}
						/>
					</BarChart>

					{this.props.data.map(photo => {
						return (
							<div className="tc bg-light-blue dib br3 pa2 ma3 bw2 shadow-5">
								<img src={require(`${photo.url}`)} />
								<p>number of votes: {photo.count}</p>
							</div>
						);
					})}
				</div>
			);
		} else return null;
	}
}

export default VotingResults;
