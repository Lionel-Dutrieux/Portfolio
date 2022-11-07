<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    color: {
        required: false,
        type: String,
        default: "#FFF"
    }
})

const emit = defineEmits(["isActive"])

const isActive = ref(false);

function toggle(): void {
    isActive.value = !isActive.value;
    emit("isActive", isActive.value);
}

</script>

<template>
    <button class="hamburger-button" :class="{ 'hamburger-button--active': isActive }" @click="toggle">
        <span class="hamburger-button__line"></span>
        <span class="hamburger-button__line"></span>
        <span class="hamburger-button__line"></span>
    </button>
</template>


<style lang="scss" scoped>
.hamburger-button {
    font-size: 2rem;
    z-index: 999;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;


    &__line {
        width: 1.5em;
        height: 0.2em;
        margin: 0.15em 0;
        border-radius: 0.2em;
        background-color: v-bind('color');

        transition: all 0.2s ease-out;

    }

    &--active {
        :nth-child(1) {
            transform: rotate(45deg) translate(0.35em, 0.35em);
        }

        :nth-child(2) {
            opacity: 0;
        }

        :nth-child(3) {
            transform: rotate(-45deg) translate(0.35em, -0.35em);
        }
    }

}
</style>