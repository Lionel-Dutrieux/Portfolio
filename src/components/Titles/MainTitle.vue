<script setup>

const props = defineProps({
    color: {
        type: String,
        default: "#EAEAEA"
    }
})

</script>

<template>
    <h1 class="main-title">
        <slot></slot>
    </h1>
</template>

<style lang="scss" scoped>
.main-title {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 150%;
    color: v-bind(color);
}
</style>