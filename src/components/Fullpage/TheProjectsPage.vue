<script setup>
import TheMainNavbar from '../Navbars/TheMainNavbar.vue';
import MainPageMargin from '../Margins/MainPageMargin.vue';
import ProjectCard from '../Cards/ProjectCard.vue';

import { useStore } from 'vuex';
import TheTechnologiesFilterButtons from '../Buttons/TheTechnologiesFilterButtons.vue';

const store = useStore();

store.commit("SET_FILTER", store.getters.getTechnologies.map(technology => technology.name));
store.commit("ADD_PROJECT", { technologies: store.getters.getTechnologiesByNames(["C#", "VueJs", "Flutter"]), name: "Cryptomulator", description: "Web And Mobile application that simulates crypto currency investment based on real datas" });
store.commit("ADD_PROJECT", { technologies: store.getters.getTechnologiesByNames(["Java", "C++"]), name: "SecCon", description: "Network project for transfering encrypted files via TCP" });
store.commit("ADD_PROJECT", { technologies: store.getters.getTechnologiesByNames(["Java", "C++"]), name: "SecCon", description: "Network project for transfering encrypted files via TCP" });
store.commit("ADD_PROJECT", { technologies: store.getters.getTechnologiesByNames(["Java", "C++"]), name: "SecCon", description: "Network project for transfering encrypted files via TCP" });
store.commit("ADD_PROJECT", { technologies: store.getters.getTechnologiesByNames(["Java", "C++"]), name: "SecCon", description: "Network project for transfering encrypted files via TCP" });
store.commit("ADD_PROJECT", { technologies: store.getters.getTechnologiesByNames(["Java", "C++", "Kubernetes"]), name: "SecCon", description: "Network project for transfering encrypted files via TCP" });
</script>

<template>
    <section class="section page">
        <TheMainNavbar />
        <MainPageMargin class="container">
            <TheTechnologiesFilterButtons />
            <div class="page__projects">
                <TransitionGroup name="list" type="animation">
                    <ProjectCard
                        v-for="(project, index) in store.getters.getProjectsWithFilter"
                        :project="project"
                        :key="index"
                        v-show="store.getters.section == 'Projects'"
                    />
                </TransitionGroup>
            </div>
        </MainPageMargin>
    </section>
</template>

<style lang="scss" scoped>
.page {
    z-index: 0;
    background-color: #232428;

    &__projects {
        display: grid;
        grid-template-columns: repeat(3, 35rem);
        grid-template-rows: repeat(2, 1fr);
        gap: 4rem;
        min-height: 40rem;
    }
}

.container {
    width: fit-content;
    margin: 0 auto;
}

.list-enter-active {
    animation: bounce-in 0.6s;
}

.list-leave-active {
    animation: bounce-in 0.6s reverse;
}

.list-move {
    transition: all 0.6s ease;
}

@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>