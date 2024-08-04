// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/color-mode",
        "@formkit/auto-animate",
    ],
    css: [
        "./assets/css/main.css",
        "@fortawesome/fontawesome-svg-core/styles.css",
    ],
});
