<script setup lang="ts">
import GithubIcon from '../icons/GithubIcon.vue';
import LinkedInIcon from '../icons/LinkedInIcon.vue';


</script>
            
<template>
    <div class="card">
        <a class="card__social" href="#">
            <LinkedInIcon class="icon" />
            LinkedIn
        </a>
        <a class="card__social" href="#">
            <GithubIcon class="icon" />
            Github
        </a>
    </div>
</template>
            
<style lang="scss" scoped>
.card {
    display: flex;
    gap: 4rem;
    background-color: var(--primary-color);

    padding: 4rem 8rem;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.9rem;

    color: #000000;

    &__social {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        .icon {
            width: 2.5rem;
        }
    }
}
</style>