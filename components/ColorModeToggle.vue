<template>
    <button class="color-mode-toggle" @click="toggle">
        <FontAwesomeIcon :icon="icon" />
    </button>
</template>

<script setup>
    const colorMode = useColorMode();

    const icon = computed(() => {
        return colorMode.value === 'light' ? 'moon' : 'sun';
    });

    const toggle = () => {
        colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
    };
</script>

<style>
    .color-mode-toggle {
        border: none;
        background-color: transparent;
        cursor: pointer;

        color: inherit;
        font-size: inherit;
    }
</style>
