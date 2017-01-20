module.exports = {
    entry: "./app/App.js",
    output: {
        path:'./public/',
        filename : "bundle.js",
    },
    devServer: {
        inline: true,
        port: 3456,
        contentBase : './public'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {   test: /\.css$/, 
                exclude: /\.useable\.css$/, 
                loader: "style!css" 
            }
        ]
    }
}