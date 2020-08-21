import axios from 'axios';

export default {
	pokeHost: 'https://pokeapi.co/api/v2/',

	getPokeList(params = {}) {
		let { limit, offset } = params;
		data = {
			limit,
			offset,
		};
		const queries = this.makeQueryParams(data);
		const url = `${this.pokeHost}pokemon?${queries}`;
		const method = 'GET';
		return this.makeRequest({ url, method });
	},

	getPokeListByRegion(params = {}) {
		const url = `${this.pokeHost}pokedex/${params.regionId}`;
		const method = 'GET';
		return this.makeRequest({ url, method });
	},

	getPokemon(name) {
		const url = `${this.pokeHost}pokemon/${name}`;
		const method = 'GET';
		return this.makeRequest({ url, method });
	},

	makeQueryParams(params) {
		let queries = '';
		for (var key in params) {
			queries += `${key}=${params[key]}&`;
		}
		return queries;
	},

	async makeRequest(requestData = {}) {
		let res = await axios(requestData);
		return res.data;
	},
	fetchCharacter() {
		return axios({
			method: 'get',
			url: `https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 671)}`,
		});
	},
};
