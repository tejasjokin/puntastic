import React from 'react';
import './Button.css';
const Button = ({ name, onSearchHandler }) =>
{
	return(
		<div>
			<button type="button" className = "grow" onClick = {onSearchHandler}>{name}</button>
		</div>
	);
}

export default Button;