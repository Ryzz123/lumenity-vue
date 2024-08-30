import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

/**
 * Vite's configuration file.
 * This configuration is used by Vite to handle the build process of the application.
 * It includes settings for the output directory, rollup options, resolve alias, and CSS postcss plugins.
 */
export default defineConfig({
    build: {
        /**
         * The directory to output the built assets.
         * The 'public' directory is used as the output directory.
         */
        outDir: 'dist',
        rollupOptions: {
            /**
             * The entry points for the application.
             * The 'main' entry point is the 'app.js' file in the 'resources/js' directory.
             * The 'style' entry point is the 'app.css' file in the 'resources/css' directory.
             */
            input: {
                main: path.resolve(__dirname, './resources/js/app.js'),
                style: path.resolve(__dirname, './resources/css/app.css'),
                vue: path.resolve(__dirname, './resources/js/src/main.js'),
            },
        },
    },

    resolve: {
        /**
         * The alias for the 'resources' directory.
         * The '@' symbol is used as the alias for the 'resources' directory.
         */
        alias: [
            {find: '@', replacement: path.resolve(__dirname, './resources')},
            {find: '@assets/*', replacement: path.resolve(__dirname, './resources/js/src/assets')},
            {find: '@components/*', replacement: path.resolve(__dirname, './resources/js/src/components')},
            {find: '@views/*', replacement: path.resolve(__dirname, './resources/js/src/views')},
            {find: '@router/*', replacement: path.resolve(__dirname, './resources/js/src/router')},
            {find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js'},
        ],
    },
    define: {
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
    },
    css: {
        postcss: {
            /**
             * The PostCSS plugins used by Vite.
             * The 'tailwindcss' and 'autoprefixer' plugins are used.
             */
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },

    plugins: [
        /**
         * Add the Vue plugin to the Vite configuration.
         */
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
