<template>
    <div class="layout">
        <header>
            <Navbar />
        </header>

        <NuxtPage />
    </div>
</template>

<script setup>
</script>

<style>
header {
    display: flex;
    justify-content: center;

    background-color: var(--bg-nav-color);
}
</style>
