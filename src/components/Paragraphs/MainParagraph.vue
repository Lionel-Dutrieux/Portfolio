<script setup>

const props = defineProps({
    color: {
        type: String,
        default: "#999999"
    }
})

</script>

<template>
    <p class="main-paragrah">
        <slot></slot>
    </p>
</template>

<style lang="scss" scoped>
.main-paragrah {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 175%;
    color: v-bind(color);
}
</style>