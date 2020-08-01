import React from 'react';

const isEmpty = (obj) => {
	for(var key in obj){
		if(obj.hasOwnProperty(key))
			return false;
	}
	return true;
}

const Joke = ({ state }) => {
	const { joke } = state;
	if(!isEmpty(joke))
	{
		return(
			<div className = "jokeContainer pa2 ma2">
				<div className = "setup">
					<h3>
						{joke["setup"]}
					</h3>
				</div>
				<div className = "delivery">
					<h1>
						{joke["delivery"]}
					</h1>
				</div>
			</div>
		);
	}
	else
	{
		return(
			<div className = "jokeContainer pa2 ma2">
				<div className = "setup">
					<h3>
						Disclaimer: The developer of this site does not support discrimination based on gender,race and age of any manner.<br />
						The jokes on this site are courtesy of <a href = "https://sv443.net/jokeapi/v2/">https://sv443.net/jokeapi/v2/</a><br />
						and the developer does not claim any rights.
					</h3>
				</div>
				<div className = "delivery">
					<h1>
						Click on Search to get your Joke.
					</h1>
				</div>
			</div>
		);
	}
}

export default Joke;