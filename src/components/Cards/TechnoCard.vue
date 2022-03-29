<script setup>
</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 7rem;
    padding: 2.6rem;
    background-color: #232428;
    border-radius: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>