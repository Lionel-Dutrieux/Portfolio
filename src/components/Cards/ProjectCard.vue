<script setup>
import HorizontalTagContainer from '../Tags/HorizontalTagContainer.vue';
import TechnoTag from '../Tags/TechnoTag.vue';

const props = defineProps({
    project: {
        type: Object,
        default: { technologies: [{ name: "C#", color: "#8650B0" }], name: "Project name", description: "Project description" }
    },
})
</script>

<template>
    <div class="card">
        <HorizontalTagContainer>
            <TechnoTag v-for="technologie in props.project.technologies" :color="technologie.color">
                {{
                    technologie.name
                }}
            </TechnoTag>
        </HorizontalTagContainer>
        <h2 class="card__name">{{ project.name }}</h2>
        <p class="card__description">{{ project.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 2rem 2.5rem;
    border-radius: 1rem;
    background-color: #2c2d31;

    max-width: 35rem;

    &__name {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 175%;
        color: #eaeaea;
        margin: 1rem 0;
    }

    &__description {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 150%;
        color: #bdbdbd;
        margin: 0;
    }
}
</style>