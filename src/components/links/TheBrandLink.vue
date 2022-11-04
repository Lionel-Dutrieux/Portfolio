<script setup lang="ts">
import TheLionelDutrieuxIcon from './../icons/LionelDutrieuxIcon.vue'

</script>

<template>
    <RouterLink :to="{ name: 'home' }" class="brand">
        <TheLionelDutrieuxIcon class="brand__icon" />
        <p class="brand__name">Lionel Dutrieux</p>
    </RouterLink>
</template>

<style lang="scss" scoped>
.brand {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    &__icon {
        width: 4rem;
    }

    &__name {
        font-weight: 600;
        font-size: 3rem;
        line-height: 2rem;

        color: #000000;

        &::after {
            content: '.';
            color: var(--primary-color);
        }
    }

}
</style>