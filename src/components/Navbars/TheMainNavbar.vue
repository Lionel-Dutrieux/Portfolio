<script setup>
import TheLDLink from '../Links/TheLDLink.vue';
import NavigationLink from '../Links/NavigationLink.vue';
import IconLink from '../Links/IconLink.vue';

</script>

<template>
    <div class="navbar">
        <TheLDLink />
        <div class="navbar__links">
            <NavigationLink anchor="Welcome">Home</NavigationLink>
            <NavigationLink anchor="About">About me</NavigationLink>
            <NavigationLink anchor="Technologies">Technologies</NavigationLink>
            <NavigationLink anchor="Projects">Projects</NavigationLink>
        </div>
        <div class="navbar__social-network">
            <IconLink
                icon="devicon-linkedin-plain"
                href="https://www.linkedin.com/in/lionel-dutrieux-2833201a3/"
            >LinkedIn</IconLink>
            <IconLink icon="devicon-github-plain" href="https://github.com/Lionel-Dutrieux">GitHub</IconLink>
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

    &__links,
    &__social-network {
        display: flex;
    }
}
</style>