const moduleMainNavbar = {
	state: () => ({ currentSection: "Welcome" }),
	mutations: {
		SET_SECTION(state, section) {
			state.currentSection = section;
		},
	},
	actions: {},
	getters: {
		section(state) {
			return state.currentSection;
		},
	},
};
export default moduleMainNavbar;
