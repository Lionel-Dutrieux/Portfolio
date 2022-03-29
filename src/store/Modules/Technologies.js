const moduleTechnologies = {
	state: () => ({ technologies: [] }),
	mutations: {
		SET_TECHNOLOGIES(state, technologies) {
			state.technologies = technologies;
		},
		ADD_TECHNOLOGIES(state, technologie) {
			state.technologies.push(technologie);
		},
	},
	actions: {},
	getters: {
		getTechnologies(state) {
			return state.technologies;
		},
		getTechnologyByName: (state) => (name) => {
			return state.technologies.find(
				(technology) => technology.name === name
			);
		},
		getTechnologiesByNames: (state, getters) => (names) => {
			let technologies = [];
			names.forEach((name) => {
				technologies.push(getters.getTechnologyByName(name));
			});
			return technologies;
		},
	},
};
export default moduleTechnologies;
