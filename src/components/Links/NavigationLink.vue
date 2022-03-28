<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

let link = ref();
const store = useStore();

const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    },
    anchor: {
        type: String,
        default: ""
    },
    href: {
        type: String,
        default: ""
    }
})

onMounted(() => {
    setLink()
})

function setLink() {
    link.value = props.href != "" ? props.href : "#" + props.anchor;
}

</script>

<template>
    <a
        :href="link"
        class="link"
        :class="{ active: isActive || store.getters.section == props.anchor }"
    >
        &lt;
        <span>
            <slot></slot>
        </span>
        &gt;
    </a>
</template>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    margin: 0 1.75rem;

    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 21px;

    color: #ffffff;
    transition: color 0.2s ease-in;

    &:hover {
        color: #505bb0;
    }
}

.active {
    color: #505bb0;
}
</style>