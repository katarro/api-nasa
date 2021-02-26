import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../Styles/Navbar.css';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import TargetEspecific from './TargetEspecific';

function Pokedex(props) {
	var img = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';

	const { pokemons } = props;
	const [pokemones, setPokemones] = useState([]);
	const [searchPoke, setSearchPoke] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const obtenerDatos = async () => {
			const api = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=988');
			const pokes = await api.json();
			setPokemones(pokes.results);
			setTimeout(function () {
				setLoading(false);
			}, 3000);
		};
		obtenerDatos();
	}, []);

	const handleChange = (e) => {
		setSearchPoke(e.target.value);
	};

	return (
		<div className="App">

			<div className="justify-content-center mb-5 mt-5">
				<div className="col-12">
					<div className="img-poke-titulo">
						<img className="img-pokemon" src={img} alt="Buscador de pokemones" />
					</div>

					<input
						placeholder="Busca un pokémon..."
						type="text"
						value={searchPoke}
						className="form-control mt-3"
						aria-label="Large"
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="container-poke">
				<div className="row-poke">
					{loading ? (
						<div className="row-loader">
							<Loader />
						</div>
					) : (
						pokemons
							.filter((user) => {
								if (searchPoke === '') {
									return user;
								} else if (user.name.toLowerCase().includes(searchPoke.toLocaleLowerCase())) {
									return user;
								}
							})
							.map((pokemon) => (
								<Link to={`/pokemons/${pokemon.id}`}>
									<div className="target" key={pokemon.id}>
										<div className="id">#{pokemon.id}</div>
										<div className="pokemon-favorite">&#10084;&#65039;</div>
										<div className="img">
											<img
												className="card-img"
												src={pokemon.sprites.front_default}
												alt="foto pokemon"
											/>
										</div>

										<div className="card-name">
											<h3 className="card-tittle">{pokemon.name}</h3>
										</div>
										<div className="card-type">
											{pokemon.types.map((type, id) => {
												return <p key={id}>{type.type.name}</p>;
											})}
										</div>
									</div>
								</Link>
							))
					)}
				</div>
			</div>
		</div>
	);
}

export default Pokedex;
