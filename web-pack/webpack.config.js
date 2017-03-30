var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/js/app.js", //where should we start
    output: {
        path: path.resolve(__dirname, 'dist'), //in current directory create new folder named dist
        filename: 'bundle.js', //file name in which all build code needs to be stored in above created folder
        publicPath: '/dist', //where are the assets will found by default it is '/', as our 
        //	file is in dist folder we need to specify this when we use wepack-dev-server   
    }, //where should we store our file
    module: {
        loaders: [{
            test: /\.css$/, //get file with css extention
            use: [
                'style-loader',
                'css-loader' //as webpack loads loaders in reverse order.
            ]
        }]
    },
    plugins: [
    	new webpack.optimize.UglifyJsPlugin({
           
        }),
    ]
};
