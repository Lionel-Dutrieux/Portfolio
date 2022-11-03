<script setup lang="ts">
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
function openUrl(): void {
    const url = props.url;
    const target = props.target == null ? "_self" : props.target
    if (url != null) {
        window.open(url, target)?.focus();
    }
}
</script>
            
<template>
    <button @click="openUrl()">
        <slot></slot>
    </button>
</template>
            
<style lang="scss" scoped>
button {
    cursor: pointer;
}
</style>