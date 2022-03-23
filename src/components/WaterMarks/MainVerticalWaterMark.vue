<script setup>

</script>

<template>
    <div class="main-vertical-water-mark">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.main-vertical-water-mark {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 10rem;
    line-height: 175%;

    text-transform: uppercase;

    color: rgba(153, 153, 153, 0.1);
    transform: rotate(-90deg) translateX(22rem) translateY(-22rem);
}
</style>