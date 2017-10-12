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
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.html$/,
            use: ["html-loader?config=otherHtmlLoaderConfig"]
        }]

    }
}
