import React from 'react';

const SearchBar = ({ searchfield, searchChange }) => {
	return (
		<div className="tc bg-light-pink dib br3 pa3 ma3  bw2">
			<p className="athelas f5 tc">
				Search for a specific photo by month:
			</p>
			<input
				className="pa2 ba b--pink searchbar athelas f5 tc"
				type="search"
				size="35"
				placeholder="type in a number between zero to eleven"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBar;
