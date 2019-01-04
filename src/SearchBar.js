import React from 'react';

const SearchBar = ({ searchfield, searchChange }) => {
	return (
		<div className="flex justify-center">
			<input
				className="pa2 ba b--pink "
				type="search"
				placeholder="input a month"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBar;
