<script setup>
import fullpage from "fullpage.js"


new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});

</script>

<template>
    <div id="fullpage">
        <div class="section">Some section</div>
        <div class="section">
            <div class="slide">Slide 1</div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
            <div class="slide">Slide 4</div>
        </div>
        <div class="section">Some section</div>
        <div class="section">Some section</div>
    </div>
</template>

<style>
</style>