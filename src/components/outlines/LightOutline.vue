<script setup lang="ts">
import BaseOutline from './BaseOutline.vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>


<template>
    <BaseOutline :text="props.text" color="#f5f8ff" background="#151515" size="4px" />
</template>