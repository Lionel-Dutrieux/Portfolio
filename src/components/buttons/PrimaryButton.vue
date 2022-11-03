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
    }
})
</script>
            
<template>
    <BaseButton :url="props.url" :target="props.target">
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
    border: 3px solid #FAEBB2;
    background: #FAEBB2;
    color: #040404;
}
</style>