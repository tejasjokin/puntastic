import React from 'react';
import './Subscript.css';

const Subscript = ({ text }) => {
	return(
		<>
			<p className = "sub">
				{text}
			</p>
		</>
	);
}

export default Subscript;