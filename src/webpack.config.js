var filename = './a.js';
if (process.argv[2] === '-p') filename = __dirname + '/../build/a.js';

console.log(process.argv, filename);

module.exports = {
	entry: './index.jsx',
	output: {
		filename: filename
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
	devServer: {
		historyApiFallback: true
	}
};