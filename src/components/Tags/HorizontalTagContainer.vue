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

    & > :not(:last-child) {
        margin-right: 1.4rem;
    }
}
</style>