<script setup>

const props = defineProps({
    color: {
        type: String,
        default: "#505BB0"
    },
})

</script>

<template>
    <div class="tag">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.tag {
    display: inline-block;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 18px;
    padding: 0.4rem 0.9rem;
    color: #eaeaea;

    border-radius: 4px;
    background-color: v-bind(color);
}
</style>