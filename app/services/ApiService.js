import axios from 'axios';

export default {
	
	host: 'https://example.com.mx/api',
	

	getExample(params = {}) {
		const url = `${this.host}`;
		const method = 'GET';
		return this.makeRequest({url, method});
	},
	
	makeQueryParams (params) {
		let queries = '';
		for(var key in params){
			queries += `${key}=${params[key]}&`;
		}
		return queries;
	},

	async makeRequest(requestData={}) {
		let res = await axios(requestData);
		return res.data;
	},
};

