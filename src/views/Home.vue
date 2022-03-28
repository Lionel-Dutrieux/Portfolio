<script setup>
import fullpage from "fullpage.js"
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import TheWelcomePage from "../components/Fullpage/TheWelcomePage.vue";

const store = useStore();

onMounted(() => {
    initFullPage()
})

let currentSection = ref();

function initFullPage() {
    new fullpage('#fullpage', {
        licenseKey: 'B704B792-98A34684-8C42BF52-DB5687F0',
        autoScrolling: true,
        responsiveWidth: 800,
        navigation: true,
        anchors: ['Welcome', 'About', 'Technologies', 'Projects'],
        afterLoad: function (origin, destination, direction) {
            store.commit("SET_SECTION", destination.anchor)
        }
    });
}
</script>

<template>
    <div id="fullpage">
        <TheWelcomePage />
        <TheWelcomePage />
        <TheWelcomePage />
        <TheWelcomePage />
    </div>
</template>

<style>
@import "fullpage.js/dist/fullpage.min.css";
</style>