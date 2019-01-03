import React from 'react';

const Card = ({ month, photoUrl }) => {
	return (
		<div className="tc bg-light-yellow dib br3 pa2 ma3 grow bw2 shadow-5">
			<img alt={`${month} month Zoe`} src={require(`${photoUrl}`)} />
			<h3 className="athelas f4 tc">Month: {month}</h3>
		</div>
	);
};

export default Card;
