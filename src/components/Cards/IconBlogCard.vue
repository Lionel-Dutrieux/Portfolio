<script setup>


</script>

<template>
    <div class="card">
        <div class="card__icon">
            <slot name="icon"></slot>
        </div>
        <div class="card__body">
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: #2c2d31;
    border-radius: 1rem;
    height: 12.4rem;

    display: flex;

    &__icon {
        background-color: #292a2e;
        min-width: 12.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem 0 0 1rem;
    }

    &__body {
        display: flex;
        align-items: center;
        padding: 3.5rem;
        overflow: hidden;

        p {
            max-height: 12rem;
            color: #bdbdbd;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 150%;
            text-overflow: ellipsis;
        }
    }
}
</style>