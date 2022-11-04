<script setup lang="ts">


</script>

<template>
    <nav class="nav">
        <RouterLink :to="{ name: 'home' }" class="nav__link">Home</RouterLink>
        <RouterLink to="{ name: 'about' }" class="nav__link">About</RouterLink>
        <RouterLink to="{ name: 'works' }" class="nav__link">Works</RouterLink>
        <RouterLink to="{ name: 'news' }" class="nav__link">News</RouterLink>
        <RouterLink to="{ name: 'contact' }" class="nav__link">Contact</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    display: flex;
    gap: 3rem;

    &__link {
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.4rem;
        color: #FFF;

        position: relative;

        &::before {
            content: "";
            width: 100%;
            height: 0.2rem;
            border-radius: 0.5rem;
            background: var(--primary-color);
            position: absolute;
            top: -0.5rem;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.4s ease;
        }

        &:hover::before,
        &.router-link-active::before {
            transform: scaleX(0.4);
        }

        &::after {
            content: '.';
            color: var(--primary-color);
        }
    }
}
</style>