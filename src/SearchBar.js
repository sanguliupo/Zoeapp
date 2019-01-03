import React from 'react';

const SearchBar = ({ searchfield, searchChange }) => {
	return (
		<input
			className="pa2 ba b--pink "
			type="search"
			placeholder="input a month"
			onChange={searchChange}
		/>
	);
};

export default SearchBar;
