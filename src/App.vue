<template>
    <div>
        <hamburger-menu />
        <div id="app">
            <router-view />
        </div>
    </div>
</template>

<script>
    import HamburgerMenu from './components/HamburgerMenu';

    export default {
        name: 'default',

        components: {
            HamburgerMenu,
        },
    };
</script>

<style lang="scss">
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background-color: $background-color;
    }

    #app {
        margin: 100px 50px 50px;
    }
</style>
