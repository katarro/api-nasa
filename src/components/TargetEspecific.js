import React from 'react';
import '../Styles/EspecificPokemon.css';

const TargetEspecific = (props) => {
	const { pokemon, poderes } = props;
	return (
		<div className="row">
			{pokemon.sprites ? (
				<div className="picture">
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
				</div>
			) : null}

			<div className="col-sm">
				<h5>Weight</h5> {pokemon.weight} lb
			</div>
			<div className="col-sm">
				<h5>Height</h5> {pokemon.height} ft
			</div>
			<div className="col-sm">
				<h5>Experience</h5> {pokemon.base_experience} xp
			</div>

			<div className="powers">
				<h5>Powers</h5>
			</div>
			{poderes.map((p) => (
				<div className="col-sm">
					<p key={p.ability.slot}>{p.ability.name}</p>
				</div>
			))}
		</div>
	);
};
export default TargetEspecific;
