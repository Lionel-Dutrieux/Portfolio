<script setup>
import HorizontalTagContainer from '../Tags/HorizontalTagContainer.vue';
import TechnoTag from '../Tags/TechnoTag.vue';
import MainTitle from '../Titles/MainTitle.vue';
import MainParagraph from '../Paragraphs/MainParagraph.vue';
import PrimaryLink from '../Links/PrimaryLink.vue';
import HorizontalStatContainer from '../Stats/HorizontalStatContainer.vue';
import LeftNumberStat from '../Stats/LeftNumberStat.vue';

</script>

<template>
    <div class="welcome-section">
        <HorizontalTagContainer class="welcome-section__tags">
            <TechnoTag>Full Stack Developer</TechnoTag>
            <TechnoTag>Devops</TechnoTag>
        </HorizontalTagContainer>
        <MainTitle class="welcome-section__title">
            From a 12-year-old beginner
            <br />To a confirmed passionate developer
        </MainTitle>
        <MainParagraph
            class="welcome-section__paragraph"
        >Hello World! Feel free to explore my portfolio and contact me for any inquiries.</MainParagraph>
        <PrimaryLink href="#" class="welcome-section__button">LET'S CHAT!</PrimaryLink>
        <HorizontalStatContainer class="welcome-section__stats">
            <LeftNumberStat number="10" text="Years" subtext="Experience" />
            <LeftNumberStat number="9" text="Projects" subtext="Completed" />
        </HorizontalStatContainer>
    </div>
</template>

<style lang="scss" scoped>
.welcome-section {
    max-width: 65rem;

    &__tags {
        opacity: 0;
        animation: opacity 2s ease-in-out 0s forwards;
    }

    &__title {
        margin: 3.5rem 0 4rem 0;
        opacity: 0;
        animation: opacity 2s ease-in-out 0.5s forwards;
    }

    &__paragraph {
        margin-bottom: 9.1rem;
        max-width: 52rem;
        opacity: 0;
        animation: opacity 2s ease-in-out 1s forwards;
    }

    &__button {
        opacity: 0;
        animation: opacity 2s ease-in-out 1.5s forwards;
    }

    &__stats {
        position: absolute;
        bottom: 9rem;
        display: flex;
    }
}

@keyframes opacity {
    0% {
        transform: translateX(-2rem);
        opacity: 0;
    }
    100% {
        transform: translateX(0rem);
        opacity: 1;
    }
}
</style>