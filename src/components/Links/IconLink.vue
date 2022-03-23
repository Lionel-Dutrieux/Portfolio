<script setup>

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
})

</script>

<template>
    <a class="link" :href="href">
        <i class="link__icon" :class="props.icon"></i>

        <slot></slot>
    </a>
</template>

<style lang="scss" scoped>
.link {
    margin: 0 1.85rem;
    display: flex;
    align-items: center;

    text-decoration: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 20px;

    color: #999999;

    &:hover {
        color: #ffffff;
    }

    &__icon {
        font-size: 1.6rem;
        margin-right: 0.9rem;
        color: #eaeaea;
    }
}
</style>