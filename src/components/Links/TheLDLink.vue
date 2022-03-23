<script setup>

const props = defineProps({
    color: {
        type: String,
        default: "#EAEAEA"
    }
})

</script>

<template>
    <h1 class="link">
        <span class="link__firstname">Lionel</span>
        <span class="link__lastname">Dutrieux</span>
        <span class="link__dot">.</span>
    </h1>
</template>

<style lang="scss" scoped>
.link {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 0%;

    &__firstname {
        color: #eaeaea;
        margin-right: 0.5rem;
    }

    &__lastname {
        color: #999999;
    }

    &__dot {
        color: #505bb0;
    }
}
</style>