var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ['./node_modules/ngVue/build/index.js',
        './index.js'
    ],
    output: {
        filename: "dist/vuetastic.js"
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [ 
        new UglifyJSPlugin({
            sourceMap: true

        })
    ]
}
