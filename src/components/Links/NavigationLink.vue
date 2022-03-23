<script setup>

const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    },
    href: {
        type: String,
        required: true
    }
})

</script>

<template>
    <a :href="href" class="link" :class="{ active: isActive }">
        &lt;
        <span>
            <slot></slot>
        </span>
        &gt;
    </a>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    margin: 0 1.75rem;

    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 21px;

    color: #ffffff;

    &:hover {
        color: #505bb0;
    }
}

.active {
    color: #505bb0;
}
</style>