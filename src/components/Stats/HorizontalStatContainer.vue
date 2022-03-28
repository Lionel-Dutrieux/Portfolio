<script setup>

</script>

<template>
    <div class="stat-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.stat-container {
    & > :not(:last-child) {
        margin-right: 10rem;
    }
}
</style>