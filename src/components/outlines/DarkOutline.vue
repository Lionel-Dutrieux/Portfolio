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
    <BaseOutline :text="props.text" color="#151515" background="#f5f8ff" size="5px" />
</template>