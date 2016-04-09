const webpack = require('webpack');

const production = process.argv[2] === '-p';

module.exports = {
	entry: './index.jsx',
	output: {
		filename: production? __dirname + '/../build/a.js' : './a.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'WEBPACK_IS_PRODUCTION': production
		})
	],
	devServer: {
		historyApiFallback: true
	}
};