<script setup>

const props = defineProps({

})

</script>

<template>
    <div class="main-page-margin">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.main-page-margin {
    margin: 0 19rem;
}
</style>