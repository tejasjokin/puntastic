import React from 'react';

const Searchbox = ({ onSearchChange }) =>{
	return(
		<div className="pa2">
		<input 
		className = "tc b br3 pa3 ba b--green bg-washed-red" 
		type="search" 
		placeholder="Enter keyword(optional)"
		onChange = { onSearchChange } 
		/>
		</div>
		);
}

export default Searchbox;