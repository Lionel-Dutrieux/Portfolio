<script setup lang="ts">
import DarkButton from '../buttons/DarkButton.vue';
import HelloEmojiIcon from '../icons/HelloEmojiIcon.vue';
import DarkOutline from "../outlines/DarkOutline.vue";
import LightOutline from "../outlines/LightOutline.vue";

import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <section class="welcome">
        <div class="welcome__introduction">
            <HelloEmojiIcon class="emoji" />
            <p>Hi there, I'm</p>
        </div>
        <h1 class="welcome__title">
            <DarkOutline text="Lionel Dutrie" />
            <LightOutline text="ux" />
        </h1>
        <h2 class="welcome__subtitle">
            <span class="primary-underline">Software Engineer</span> based in <span class="country">Belgium</span>
        </h2>
        <div class="welcome__buttons">
            <DarkButton class="button">
                My Works
                <ArrowLongRightIcon class="icon" />
            </DarkButton>
            <DarkButton :outline="true">Contact-me</DarkButton>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.welcome {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    &__introduction {
        display: flex;
        align-items: center;
        gap: 1rem;

        .emoji {
            width: 3rem;
            height: 3rem;

            animation-name: wave-animation;
            animation-duration: 2.5s;
            animation-delay: 0.5s;
            animation-iteration-count: infinite;
            transform-origin: 60% 70%;
            display: inline-block;
        }

        p {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 3.2rem;
            line-height: 4.5rem;
            color: #000000;
        }
    }

    &__title {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 10rem;
        line-height: 10rem;
    }

    &__subtitle {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 4.75rem;
        line-height: 5.9rem;

        span.country {
            color: white;
        }
    }

    &__buttons {
        display: flex;
        gap: 2rem;

        margin-top: 2rem;

        .button {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .icon {
            width: 2.4rem;
        }
    }
}

@keyframes wave-animation {
    0% {
        transform: rotate(0.0deg)
    }

    10% {
        transform: rotate(14.0deg)
    }

    /* The following five values can be played with to make the waving more or less extreme */
    20% {
        transform: rotate(-8.0deg)
    }

    30% {
        transform: rotate(14.0deg)
    }

    40% {
        transform: rotate(-4.0deg)
    }

    50% {
        transform: rotate(10.0deg)
    }

    60% {
        transform: rotate(0.0deg)
    }

    /* Reset for the last half to pause */
    100% {
        transform: rotate(0.0deg)
    }
}
</style>