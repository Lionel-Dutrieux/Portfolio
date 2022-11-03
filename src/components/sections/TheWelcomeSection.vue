<script setup lang="ts">
import DarkButton from '../buttons/DarkButton.vue';
import HelloEmojiIcon from '../icons/HelloEmojiIcon.vue';
import DarkOutline from "../outlines/DarkOutline.vue"
import LightOutline from "../outlines/LightOutline.vue"
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
            <DarkButton>My Works</DarkButton>
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

        margin-top: 3rem;
    }
}
</style>