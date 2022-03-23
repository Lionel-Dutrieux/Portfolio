<script setup>
import MainTitle from "../Titles/MainTitle.vue";
import MainParagraph from "../Paragraphs/MainParagraph.vue";
import PrimaryLink from "../Links/PrimaryLink.vue";
import TechnoTag from "../Tags/TechnoTag.vue";
import MainPageMargin from "../Margins/MainPageMargin.vue";
import MainVerticalWaterMark from "../WaterMarks/MainVerticalWaterMark.vue";
import TheMainNavbar from "../Navbars/TheMainNavbar.vue";
import LeftNumberStat from "../Stats/LeftNumberStat.vue";

</script>

<template>
    <section class="section page">
        <img id="blob-top" src="../../assets/img/blobTop.svg" alt="Blob" />
        <TheMainNavbar />
        <MainPageMargin>
            <div class="container">
                <div class="main-text">
                    <img class="main-text__blob" src="../../assets/img/blobMiddle.svg" alt="Blob" />
                    <div class="main-text__tags-container">
                        <TechnoTag>Full Stack Developer</TechnoTag>
                        <TechnoTag>Devops</TechnoTag>
                    </div>
                    <MainTitle class="main-text__title">
                        From a 12-year-old beginner
                        <br />To a confirmed passionate developer
                    </MainTitle>
                    <MainParagraph
                        class="main-text__paragraph"
                    >Hello World! Feel free to explore my portfolio and contact me for any inquiries.</MainParagraph>
                    <PrimaryLink href="#">LET'S CHAT!</PrimaryLink>
                    <div class="stats">
                        <LeftNumberStat number="10" text="Years" subtext="Experience" />
                        <LeftNumberStat number="9" text="Projects" subtext="Terminated" />
                    </div>
                </div>
                <div class="avatar">
                    <img src="../../assets/img/avatar.svg" alt="Lionel Dutrieux" />
                </div>
            </div>
        </MainPageMargin>
        <MainVerticalWaterMark class="page__watermark">PORTFOLIO</MainVerticalWaterMark>
    </section>
</template>

<style lang="scss" scoped>
.page {
    z-index: 0;
    background-color: #2d2e32;

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

.main-text {
    &__blob {
        position: absolute;
        margin: -8rem 0 0 -11.5rem;
        z-index: -1;
    }

    &__tags-container {
        display: flex;

        & > :not(:last-child) {
            margin-right: 1.4rem;
        }
    }

    &__title {
        margin: 3.5rem 0 4rem 0;
    }

    &__paragraph {
        margin-bottom: 9.1rem;
        max-width: 52rem;
    }
}

.avatar {
    position: relative;
    top: 5rem;

    img {
        width: 60rem;
    }
}

.stats {
    position: absolute;
    bottom: 9rem;
    display: flex;

    & > :not(:last-child) {
        margin-right: 10rem;
    }
}

#blob-top {
    position: absolute;
    top: 0;
    right: 0;
    width: 45rem;
}
</style>