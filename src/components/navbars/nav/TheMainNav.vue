<script setup lang="ts">
import HamburgerButton from '@/components/buttons/HamburgerButton.vue'
import { ref } from 'vue';



const isShown = ref(false);

function setShown(value: boolean): void {
    isShown.value = value;
}

</script>

<template>
    <nav class="nav" :class="{ 'nav--mobile': isShown }">
        <RouterLink :to="{ name: 'home' }" class="nav__link">Home</RouterLink>
        <RouterLink to="{ name: 'about' }" class="nav__link">About</RouterLink>
        <RouterLink to="{ name: 'works' }" class="nav__link">Works</RouterLink>
        <RouterLink to="{ name: 'news' }" class="nav__link">News</RouterLink>
        <RouterLink to="{ name: 'contact' }" class="nav__link">Contact</RouterLink>
    </nav>
    <HamburgerButton @isActive="setShown" class="hamburger-button" />
</template>


<style lang="scss" scoped>
@import "./../../../assets/css/variables.scss";


.nav {
    font-size: 1rem;

    display: flex;
    gap: 3em;

    transition: 0.3s ease-out;

    @media screen and (max-width: map-get($breakpoints, medium)) {

        gap: 4em;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;

        background-color: #151515f1;

        transform: translateX(100%);
        opacity: 0;
    }

    &--mobile {
        transform: translateX(0);
        opacity: 100;
    }

    &__link {
        font-size: 2em;
        font-weight: 500;
        line-height: 1.2em;
        color: #FFF;

        position: relative;

        &::before {
            content: "";
            width: 100%;
            height: 0.1em;
            border-radius: 0.25em;
            background: var(--primary-color);
            position: absolute;
            top: -0.25em;
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

.hamburger-button {
    display: none;

    @media screen and (max-width: map-get($breakpoints, medium)) {
        display: inherit;
    }
}
</style>