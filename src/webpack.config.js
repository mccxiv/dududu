module.exports = {
	entry: './index.jsx',
	output: '/bundle.js',
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
	devServer: {
		historyApiFallback: true
	}
};