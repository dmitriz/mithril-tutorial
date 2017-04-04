var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!raw-loader' },
			{test: /\.html$/, loader: 'raw-loader' }
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './build')
	},
	devtool: 'source-map',
	watch: true,
	plugins: [
		new HtmlWebpackPlugin()
	]
}