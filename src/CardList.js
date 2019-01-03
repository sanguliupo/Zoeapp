import React from 'react';
import Card from './Card';

function CardList({ data }) {
	if (data.length == 0) {
		return (
			<p className="tc">
				This is not a valid input. Type in something like "one", "two",
				or "three", up to "eleven".
			</p>
		);
	} else
		return (
			<div className="tc">
				{data.map((monthAndUrl, index) => {
					return (
						<Card
							month={monthAndUrl.month}
							photoUrl={monthAndUrl.url}
						/>
					);
				})}
			</div>
		);
}

export default CardList;
