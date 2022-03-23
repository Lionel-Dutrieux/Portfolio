<script setup>
import fullpage from "fullpage.js"
import { onMounted } from "vue";
import TheWelcomePage from "../components/Fullpage/TheWelcomePage.vue";

onMounted(() => {
    initFullPage()
})

function initFullPage() {
    new fullpage('#fullpage', {
        licenseKey: 'B704B792-98A34684-8C42BF52-DB5687F0',
        autoScrolling: true,
        responsiveWidth: 800,
        navigation: true,
    });
}
</script>

<template>
    <div id="fullpage">
        <TheWelcomePage />
        <section class="section">Some section</section>
        <section class="section">Some section</section>
    </div>
</template>

<style>
@import "fullpage.js/dist/fullpage.min.css";
</style>