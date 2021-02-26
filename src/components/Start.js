import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../Styles/Start.css';
export default function Start() {
	var img = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';

	return (
		<React.Fragment>

			<div className="container" id="container-Start">
				<div className="row3">
					<div className="col-12">
						<img src={img} alt="Pokemons" />
					</div>

					<div className="col-12" id="button-Start">
						<Link to="/pokemons">
							<button className="btn btn-success"> Click to view Pokemons</button>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
