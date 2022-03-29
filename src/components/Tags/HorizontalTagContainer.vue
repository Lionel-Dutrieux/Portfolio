<script setup>

</script>

<template>
    <div class="tag-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.tag-container {
    display: flex;
    gap: 1.4rem;
    flex-wrap: wrap;
}
</style>