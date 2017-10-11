var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ['./index.js', 
            './node_modules/vue/dist/vue.min.js',
        './node_modules/ngVue/build/index.js'
    ],
    output: {
        filename: "dist/vuetastic.js"
    }
}
