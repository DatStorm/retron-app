module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
        ],
    },
};