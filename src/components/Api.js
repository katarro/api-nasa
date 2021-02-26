export const searchPokemonEspecific = async (pokemon) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
		const render = await fetch(url);
		const data = await render.json();
		return data;
	} catch (error) {
		return 'Error';
	}
};

export const getPokemons = async () => {
	try {
		let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=988';
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {}
};

export const getPokemonData = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {}
};

export const Powers = async (props) => {
	//console.log(props)

	try {
		const response = await fetch(props);
		const data = await response.json();
		return data;
		//console.log(data)
	} catch (error) {}
};
