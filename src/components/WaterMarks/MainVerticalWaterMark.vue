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
    font-size: 8rem;
    line-height: 15rem;

    text-transform: uppercase;
    writing-mode: vertical-lr;
    color: rgba(153, 153, 153, 0.1);
    transform: rotate(-180deg);

    position: absolute;
    bottom: 5rem;
    left: 0rem;
}
</style>