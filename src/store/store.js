import { createStore } from "vuex";
import MainNavbar from "./modules/MainNavbar";

const store = createStore({
	modules: { mainNavbar: MainNavbar },
});

export default store;
