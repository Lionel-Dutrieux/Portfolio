<script setup>
import { useStore } from 'vuex';
import TechnoTag from '../Tags/TechnoTag.vue';
import HorizontalTagContainer from '../Tags/HorizontalTagContainer.vue';


const store = useStore();

function updateFilter(technology) {
    store.dispatch("useFilter", technology);
}
</script>

<template>
    <div class="filter">
        <p class="filter__label">Filter by technology:</p>
        <HorizontalTagContainer>
            <TechnoTag
                v-for="technology in store.getters.getTechnologies"
                :color="technology.color"
                class="button"
                :class="{ desactivate: !store.getters.getFilter.includes(technology.name) }"
                @click="updateFilter(technology.name)"
            >{{ technology.name }}</TechnoTag>
        </HorizontalTagContainer>
    </div>
</template>

<style lang="scss" scoped>
.filter {
    display: flex;
    align-items: center;
    gap: 2rem;

    &__label {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 150%;

        color: #999999;
    }
}

.desactivate {
    background-color: initial;
    border: 1px solid #adadad;
    color: #adadad;
}

.button {
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s ease-in;
}
</style>