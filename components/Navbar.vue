<template>
    <nav class="navbar">
        <div class="online-view">
        </div>

        <div class="controls">
            <div class="user-controls">
            </div>

            <div class="group-controls">
            </div>

            <ColorModeToggle />
        </div>
    </nav>
</template>

<style>
    nav.navbar {
        width: 100%;

        padding: 1rem 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 1rem;
    }

    .controls {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
</style>
