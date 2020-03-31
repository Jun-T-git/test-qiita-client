module.exports = {
    entry: './src/index.jsx',

    resolve: {
        extentions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /¥.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    }
};