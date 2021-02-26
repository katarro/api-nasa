/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import TargetEspecific from './TargetEspecific';

const EspecificPokemon = () => {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState([]);
	const [poderes, setPoderes] = useState([]);
	useEffect(() => {
		const datosPokemons = async () => {
			const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const pokemon = await api.json();
			setPokemon(pokemon);
			setPoderes(pokemon.abilities);
			//Save 2 values in a State
			/***************/
			// Call to function that return description of powers
			/* poderes.map(p=>(
            )) */
			//Powers( pokemon.ability.url)
		};
		datosPokemons();
	}, []);

	return (
		<React.Fragment>
			<TargetEspecific pokemon={pokemon} poderes={poderes} />
		</React.Fragment>
	);
};
export default EspecificPokemon;
