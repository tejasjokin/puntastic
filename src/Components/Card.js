import React from 'react';
import JokeType from './JokeType.js';
import Joke from './Joke.js';

const Card = ({state}) =>
{
	return(
		<div className = "cardContainer bg-light-blue shadow-3 br3 ba b--black-60 tc dib ma2 grow">
			<div className = "cardContent">
				<JokeType state = { state }/>
				<Joke state = {state}/>
			</div>
		</div>
	);
}

export default Card;