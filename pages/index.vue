<template>
    <div style="height: 100%">
        <NuxtRouteAnnouncer />

        <main>
            <aside>
                <Sidebar />
            </aside>

            <section class="content">
            </section>
        </main>
    </div>
</template>

<script setup>
</script>

<style>
main {
    display: flex;
    height: 100%;
}

aside {
    width: 18rem;
    height: 100%;
    border-top: 7px solid var(--bg-color);
    margin-left: 6px;
    border-radius: 1rem;
    background-color: var(--bg-nav-color);
}
</style>
