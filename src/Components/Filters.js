import React from 'react';
import './Filters.css'

const Filters = ({ checkBoxHandler }) =>
{
	return(
		<>
			<div className = "filters ">
				<ul>
					<li>
						<input className="tgl tgl-light" id="cb1" value = "Programming" type="checkbox" onClick = { checkBoxHandler }/>
							<label className="tgl-btn" htmlFor="cb1">
							</label>
						&nbsp;Programming
					</li>
					<li>
						<input className="tgl tgl-light" id="cb2" value = "Miscellaneous" type="checkbox" onClick = { checkBoxHandler }/>
							<label className="tgl-btn" htmlFor="cb2">
							</label>
						&nbsp;Miscellaneous
					</li>
					<li>
						<input className="tgl tgl-light" id="cb3" value = "Dark" type="checkbox" onClick = { checkBoxHandler }/>
						<label className="tgl-btn" htmlFor="cb3">
						</label>
						&nbsp;Dark
					</li>
				</ul>
			</div>
		</>
	);
}

export default Filters;