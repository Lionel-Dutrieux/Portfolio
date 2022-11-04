<script setup lang="ts">
import BaseButton from './BaseButton.vue';

const props = defineProps({
    url: {
        required: false,
        type: String
    },
    target: {
        required: false,
        type: String
    },
    outline: {
        required: false,
        type: Boolean
    }
})
</script>
            
<template>
    <BaseButton :url="props.url" :target="props.target" :class="{ outline: props.outline }">
        <slot>
        </slot>
    </BaseButton>
</template>
            
<style lang="scss" scoped>
button {
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.4rem;

    padding: 0.7rem 1.4rem;
    border-radius: 0.5rem;
    border: 3px solid var(--dark-bg-color);
    background: var(--dark-bg-color);
    color: #FFF;

    transition: 0.3s all ease-in-out;

    &:hover {
        background-color: #000;
        color: var(--primary-color);
    }

    &:focus-visible {
        color: var(--primary-color);
        border-color: var(--primary-color);
    }

    &.outline {
        color: var(--dark-bg-color);
        background-color: var(--light-bg-color);

        &:hover {
            background-color: var(--dark-bg-color);
            color: var(--primary-color);
        }
    }
}
</style>