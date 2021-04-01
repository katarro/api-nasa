import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Start.css';
import Aastronauta from '../media/astronauta2.jpg'

export default function Start() {
//photo-of-day
	return (
		<React.Fragment>
			<div className="container" id="container-Start">
				<div className="row3">
					<div className="col-12">
						<img src={Aastronauta} alt="astronauta" />
					</div>

					<div className="col-12" id="button-Start">
						<Link to="/form">
							<button className="btn btn-primary btn-lg" id="btn">Conocer asteroides</button>
						</Link>
						<Link to="/photos">
							<button className="btn btn-primary btn-lg" id="btn" >Fotos de la Nasa</button>
						</Link>
						<Link to="/photo-of-day">
							<button className="btn btn-primary btn-lg" id="btn">Foto del dia</button>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
