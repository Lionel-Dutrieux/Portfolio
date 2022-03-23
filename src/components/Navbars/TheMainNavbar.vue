<script setup>
import TheLDLink from '../Links/TheLDLink.vue';
import NavigationLink from '../Links/NavigationLink.vue';
import IconLink from '../Links/IconLink.vue';

</script>

<template>
    <div class="navbar">
        <TheLDLink />
        <div class="navbar__links">
            <NavigationLink href="#" isActive="true">Home</NavigationLink>
            <NavigationLink href="#">About me</NavigationLink>
            <NavigationLink href="#">Technologies</NavigationLink>
            <NavigationLink href="#">Projects</NavigationLink>
        </div>
        <div class="navbar__social-network">
            <IconLink icon="devicon-linkedin-plain" href="#">LinkedIn</IconLink>
            <IconLink icon="devicon-github-plain" href="#">GitHub</IconLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    &__links {
        display: flex;
    }

    &__social-network {
        display: flex;
    }
}
</style>