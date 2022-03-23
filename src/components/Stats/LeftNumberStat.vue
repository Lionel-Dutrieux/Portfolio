<script setup>

const props = defineProps({
    number: {
        type: Number,
        default: "0",
        required: true,
    },
    text: {
        type: String,
        default: "",
    },
    subtext: {
        type: String,
        default: "",
    }
})

</script>

<template>
    <div class="stat">
        <span class="stat__number">{{ number }}</span>
        <div class="stat__container">
            <p class="stat__text">{{ text }}</p>
            <p class="stat__subtext">{{ subtext }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.stat {
    font-family: "Montserrat";
    font-style: normal;
    text-transform: uppercase;
    line-height: 175%;

    display: flex;
    align-items: center;

    &__number {
        font-weight: 500;
        font-size: 5rem;
        margin-right: 1.3rem;

        color: #ffffff;
    }

    &__container {
        font-weight: 400;
        font-size: 1.7rem;
        color: #999999;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    &__text {
        margin: 0 0 0.2rem 0;
    }

    &__subtext {
        margin: 0.2rem 0 0 0;
    }
}
</style>