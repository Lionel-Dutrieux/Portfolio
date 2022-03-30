<script setup>
import MainPageMargin from "../Margins/MainPageMargin.vue";
import TheMainNavbar from "../Navbars/TheMainNavbar.vue";
import IconBlogCard from "../Cards/IconBlogCard.vue";
import TextSection from "../Section/TextSection.vue";
import MainTitle from "../Titles/MainTitle.vue";
import MainParagraph from "../Paragraphs/MainParagraph.vue";
import PrimaryLink from "../Links/PrimaryLink.vue";
import MainVerticalWaterMark from "../WaterMarks/MainVerticalWaterMark.vue";

</script>

<template>
    <section class="section page">
        <TheMainNavbar />
        <MainPageMargin class="container">
            <div class="blog-container">
                <p class="blog-container__title">Last articles</p>
                <div class="blog-container__cards">
                    <IconBlogCard>
                        <template #icon>
                            <i class="devicon-raspberrypi-line"></i>
                        </template>
                        Setting up a raspberry pi cluster with Kubernetes
                    </IconBlogCard>
                    <IconBlogCard>
                        <template #icon>
                            <i class="devicon-kubernetes-plain"></i>
                        </template>
                        Configure an ingress controller to host multiple sites on a cluster
                    </IconBlogCard>
                </div>
            </div>
            <TextSection>
                <template #title>
                    <MainTitle>Hello! I’m Lionel Dutrieux</MainTitle>
                </template>
                <template #paragraph>
                    <MainParagraph>I started to develop a special interest for programation at the age of 12. Since then, I was completely convinced that I wanted to turn my hobby into my everyday job. Today, I am in my final year in computer science bachelor at Haute Ecole Libre Mosane in Liège, with the aim to specialize as a DevOps Engineer.</MainParagraph>
                </template>
                <template #footer>
                    <PrimaryLink href="#">DOWNLOAD MY CV</PrimaryLink>
                </template>
            </TextSection>
        </MainPageMargin>
        <MainVerticalWaterMark>&lt;ABOUT ME/&gt;</MainVerticalWaterMark>
    </section>
</template>

<style lang="scss" scoped>
.page {
    z-index: 0;
    background-color: #232428;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10rem;
}

.blog-container {
    &__title {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 150%;
        margin-bottom: 2.5rem;

        color: #999999;
    }

    &__cards {
        max-width: 50rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .devicon-raspberrypi-line {
            color: #b05067;
            font-size: 6rem;
        }

        .devicon-kubernetes-plain {
            color: #486bb3;
            font-size: 6rem;
        }
    }
}
</style>