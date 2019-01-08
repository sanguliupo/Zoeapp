import React, { Component } from 'react';

import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
	Legend,
	ResponsiveContainer
} from 'recharts';

class VotingResults extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (this.props.show === true && this.props.voteResponse.length) {
			this.props.voteResponse.forEach(vote => {
				// update the this.props.data for photo rendering
				this.props.data[vote.photoId].count = vote.count;
			});

			const chartData = this.props.data.map((photoDatum, index) => {
				return {
					vote: photoDatum.count,
					name: `month ${index} `
				};
			});

			return (
				<div className="votingContainer">
					<div className="votingLeftColumn">
						{this.props.data.map(photo => {
							return (
								<div key={photo.url}>
									<img
										src={require(`${photo.url}`)}
										className="votePhotos b--solid bw1 b--black-50"
									/>
								</div>
							);
						})}
					</div>
					<ResponsiveContainer width="95%" height={1250}>
						<BarChart
							className="BarChart"
							width={1000}
							height={1200}
							data={chartData}
							layout="vertical"
							barSize={45}
						>
							<CartesianGrid strokeDasharray="1 3" />
							<XAxis type="number" dataKey="vote" />
							<YAxis type="category" dataKey="name" />
							<Tooltip />
							<Bar dataKey="vote" fill="#ff00cc" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			);
		} else return null;
	}
}

export default VotingResults;
