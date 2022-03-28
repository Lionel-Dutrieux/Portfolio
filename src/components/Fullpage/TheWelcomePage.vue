<script setup>
import MainPageMargin from "../Margins/MainPageMargin.vue";
import MainVerticalWaterMark from "../WaterMarks/MainVerticalWaterMark.vue";
import TheMainNavbar from "../Navbars/TheMainNavbar.vue";
import TheWelcomeSection from "../UniqueComponents/TheWelcomeSection.vue";
import TheAvatarSection from "../UniqueComponents/TheAvatarSection.vue";

</script>

<template>
    <section class="section page">
        <TheMainNavbar />
        <MainPageMargin class="container">
            <TheWelcomeSection />
            <TheAvatarSection />
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
</style>