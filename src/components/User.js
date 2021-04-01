import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import '../Styles/User.css';

const User = () => {
	const { id } = useParams();
	var peligroso = '';
	var planeta = '';

	const [cometa, setCometa] = React.useState([]);
	const [loading, setLoading] = useState(true);

	React.useEffect(() => {
		obtenerDatos();
	}, []);

	const obtenerDatos = async () => {
		const key = 'SOTesAxrhiguKjl0ZCNfeGgf7RaeBIpBQzzTZGeK';

		try {
			const promise = await fetch(
				`https://api.nasa.gov/neo/rest/v1/feed?start_date=${id}&end_date=${id}&api_key=${key}`
			);
			//https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=SOTesAxrhiguKjl0ZCNfeGgf7RaeBIpBQzzTZGeK
			const data = await promise.json();
			setCometa(data.near_earth_objects[id]);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="User-table">
			<div className="row">
				<div className="col-sm-12" id="title">
					<h1>Asteroides Captados en</h1>
				</div>
				<div className="col-sm-12" id="title">
					<h2>{id}</h2>
				</div>
				<div className="col-sm-9">
					{loading ? (
						<Loader />
					) : (
						<table className="table">
							<thead className="table-light">
								<tr>
									<th>Nombre</th>
									<th>Velocidad</th>
									<th>Orbita</th>
									<th>Diametro</th>
									<th>Peligroso</th>
									<th>Distancia</th>
								</tr>
							</thead>

							<tbody>
								{cometa.map((i) => (
									<tr>
										<td>{i.name}</td>

										{i.close_approach_data.map((j) => (
											<td>
												{new Intl.NumberFormat("de-DE").format(Number.parseFloat(j.relative_velocity.kilometers_per_hour).toFixed())}{' '}
												Km/h
											</td>
										))}
										{i.close_approach_data.map((j) => (
											<td>
												{j.orbiting_body ? (planeta = 'Tierra') : (planeta = j.orbiting_body)}
											</td>
										))}
										<td>
											{new Intl.NumberFormat("de-DE").format(i.estimated_diameter.meters.estimated_diameter_min.toFixed())  } -{' '}
											{new Intl.NumberFormat("de-DE").format(i.estimated_diameter.meters.estimated_diameter_max.toFixed())} Mts
										</td>

										<td>
											{i.is_potentially_hazardous_asteroid
												? (peligroso = 'Si')
												: (peligroso = 'No')}
										</td>

										{i.close_approach_data.map((j) => (
											<td> {new Intl.NumberFormat("de-DE").format(Number.parseInt(j.miss_distance.kilometers).toFixed())} Km </td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
				<div className="row">
					<div className="col-1">
						<Link to="/form">
							<button className="btn btn-primary btn-md mb-5">Volver</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
