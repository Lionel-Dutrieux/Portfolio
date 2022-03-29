<script setup>
import { useStore } from 'vuex';
import Home from './views/Home.vue';

const store = useStore();

let technologies = [{ name: "C#", color: "#8650B0" }, { name: "Java", color: "#D3AA3F" }, { name: "VueJs", color: "#41B883" }, { name: "Flutter", color: "#3FB6D3" }, { name: "C++", color: "#B05061" }, { name: "Kubernetes", color: "#486BB3" }];
store.commit("SET_TECHNOLOGIES", technologies)

</script>

<template>
  <Home />
</template>

<style>
@import "devicon/devicon.min.css";
html {
  font-size: 10px;
}
</style>