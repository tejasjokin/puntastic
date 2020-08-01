import React from 'react';
import './JokeType.css'

const JokeType = ({ state }) =>
{
	const { type } = state
	return(
		<div className = "bb b--black-60 ma1 tl Type">
			<p>{type}</p>
		</div>
	);
}

export default JokeType;