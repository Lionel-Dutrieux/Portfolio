<script setup>
import MainPageMargin from "../Margins/MainPageMargin.vue";
import MainVerticalWaterMark from "../WaterMarks/MainVerticalWaterMark.vue";
import TheMainNavbar from "../Navbars/TheMainNavbar.vue";
import TheAvatarSection from "../UniqueComponents/TheAvatarSection.vue";
import TextSection from "../Section/TextSection.vue";
import HorizontalTagContainer from "../Tags/HorizontalTagContainer.vue";
import TechnoTag from "../Tags/TechnoTag.vue";
import MainTitle from "../Titles/MainTitle.vue";
import PrimaryLink from "../Links/PrimaryLink.vue";
import MainParagraph from "../Paragraphs/MainParagraph.vue";
import HorizontalStatContainer from "../Stats/HorizontalStatContainer.vue";
import LeftNumberStat from "../Stats/LeftNumberStat.vue";

</script>

<template>
    <section class="section page">
        <TheMainNavbar />
        <MainPageMargin class="container">
            <TextSection>
                <template #header>
                    <HorizontalTagContainer class="page__tags">
                        <TechnoTag>Full Stack Developer</TechnoTag>
                        <TechnoTag>Devops</TechnoTag>
                    </HorizontalTagContainer>
                </template>
                <template #title>
                    <MainTitle class="page__title">
                        From a 12-year-old beginner
                        <br />To a confirmed passionate developer
                    </MainTitle>
                </template>
                <template #paragraph>
                    <MainParagraph
                        class="page__paragraph"
                    >Hello World! Feel free to explore my portfolio and contact me for any inquiries.</MainParagraph>
                </template>
                <template #footer>
                    <PrimaryLink href="#" class="page__button">LET'S CHAT!</PrimaryLink>
                    <HorizontalStatContainer class="page__stats">
                        <LeftNumberStat number="10" text="Years" subtext="Experience" />
                        <LeftNumberStat number="9" text="Projects" subtext="Completed" />
                    </HorizontalStatContainer>
                </template>
            </TextSection>
            <TheAvatarSection />
        </MainPageMargin>
        <MainVerticalWaterMark class="page__watermark">PORTFOLIO</MainVerticalWaterMark>
    </section>
</template>

<style lang="scss" scoped>
.page {
    z-index: 0;
    background-color: #2d2e32;

    &__tags {
        opacity: 0;
        animation: opacity 2s ease-in-out 0s forwards;
    }

    &__title {
        opacity: 0;
        animation: opacity 2s ease-in-out 0.5s forwards;
    }

    &__paragraph {
        opacity: 0;
        animation: opacity 2s ease-in-out 1s forwards;
    }

    &__button {
        opacity: 0;
        animation: opacity 2s ease-in-out 1.5s forwards;
    }

    &__stats {
        position: absolute;
        bottom: 6rem;
        display: flex;
        align-content: flex-start;
    }

    &__watermark {
        display: inline-block;
        position: absolute;
        bottom: 5rem;
        left: 0rem;
    }
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-around;
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