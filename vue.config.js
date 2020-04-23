const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    publicPath: '',

    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/styles.scss";`,
            },
        },
    },

    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                // Absolute path to compiled SPA
                staticDir: path.join(__dirname, 'dist'),
                // List of routes to prerender (ex. those using netlify forms)
                routes: ['/', '/salads', '/soups', '/starters', '/mains', '/settings'],
            }),
        ],
    },
};
