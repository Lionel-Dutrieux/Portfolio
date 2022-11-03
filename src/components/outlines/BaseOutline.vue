<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
})

</script>


<template>
    <div class="outline" :data-text="props.text">
        {{ props.text }}
    </div>
</template>

<style lang="scss" scoped>
.outline {
    display: inline-block;
    position: relative;
    color: transparent;
    -webkit-text-stroke: v-bind('props.size') v-bind('props.color');

    &::after {
        content: attr(data-text);
        color: v-bind('props.background');
        position: absolute;
        top: 0px;
        left: 0px;
        -webkit-text-stroke: 0px v-bind('props.color');
    }
}
</style>