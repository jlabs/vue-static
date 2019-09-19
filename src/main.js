// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    /* head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Press+Start+2P',
    })

    head.link.push({
        rel: 'stylesheet',
        href: 'https://unpkg.com/nes.css@latest/css/nes.min.css',
    }) */

    head.htmlAttrs = { lang: 'en', class: 'text-gray-900 antialiased leading-tight' };
    head.bodyAttrs = { class: 'min-h-screen bg-gray-100' };

}