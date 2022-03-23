<script setup>

const props = defineProps({
    color: {
        type: String,
        default: "#505BB0"
    },
    href: {
        type: String,
        required: true
    }
})

</script>

<template>
    <a class="primary-link" :href="href">
        <slot></slot>
    </a>
</template>

<style lang="scss" scoped>
.primary-link {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 175%;
    color: v-bind(color);
}
</style>