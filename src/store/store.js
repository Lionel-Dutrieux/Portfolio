import { createStore } from "vuex";
import MainNavbar from "./modules/MainNavbar";
import Projects from "./modules/Projects";
import Technologies from "./modules/Technologies";

const store = createStore({
	modules: {
		mainNavbar: MainNavbar,
		projects: Projects,
		technologies: Technologies,
	},
});

export default store;
