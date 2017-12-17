const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/bundle',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public'
    },

    module:
    {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
	    {
             test: /\.css$/,
             loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            {
             test: /\.scss$/,
             use: extractSass.extract({
                use: ['css-loader','sass-loader'],
                // use style-loader in development
                fallback: "style-loader"
              })
            }
 
          ]
    },
      plugins : [
	extractSass
      ]
};
