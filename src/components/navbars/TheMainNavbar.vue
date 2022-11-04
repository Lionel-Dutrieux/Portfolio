<script setup lang="ts">
import TheBrandLink from '../links/TheBrandLink.vue';
import TheMainNav from './nav/TheMainNav.vue';

</script>

<template>
    <div class="navbar">
        <TheBrandLink />
        <TheMainNav />
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>