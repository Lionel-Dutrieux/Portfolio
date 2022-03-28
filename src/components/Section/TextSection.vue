<script setup>
</script>

<template>
    <div class="text-section">
        <div class="text-section__header">
            <slot name="header"></slot>
        </div>
        <div class="text-section__title">
            <slot name="title"></slot>
        </div>
        <div class="text-section__paragraph">
            <slot name="paragraph"></slot>
        </div>
        <div class="text-section__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.text-section {
    max-width: 65rem;

    &__title {
        margin: 3.5rem 0 4rem 0;
    }

    &__paragraph {
        margin-bottom: 9.1rem;
        max-width: 52rem;
    }
}
</style>