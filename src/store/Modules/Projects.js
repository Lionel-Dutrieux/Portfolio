const moduleProjects = {
	state: () => ({ projects: [], filter: [] }),
	mutations: {
		SET_PROJECTS(state, projects) {
			state.projects = projects;
		},
		ADD_PROJECT(state, project) {
			state.projects.push(project);
		},
		SET_FILTER(state, filter) {
			state.filter = filter;
		},
		ADD_FILTER(state, filter) {
			state.filter.push(filter);
		},
		REMOVE_FILTER(state, filter) {
			state.filter = state.filter.filter((e) => e != filter);
		},
	},
	actions: {
		useFilter({ commit, getters, dispatch }, technology) {
			if (getters.getFilter.includes(technology)) {
				commit("REMOVE_FILTER", technology);
			} else {
				commit("ADD_FILTER", technology);
			}
		},
	},
	getters: {
		getProjects(state) {
			return state.projects;
		},
		getProjectsWithFilter(state) {
			if (state.filter.length === 0) return state.projects;
			return state.projects.filter(function (project) {
				return project.technologies.find((technology) =>
					state.filter.includes(technology.name)
				);
			});
		},
		getFilter(state) {
			return state.filter;
		},
	},
};
export default moduleProjects;
