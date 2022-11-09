let mode = 'development';
let hmr = true;
if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	
	/* Убираем HMR в продакшене */
	hmr = false;
}
console.log(mode + ' mode');
console.log('Hot Module Replacement ' + hmr);


module.exports = {
	mode: mode,
	optimization: {
		minimize: false,
	},
	
	/* Настройки webpack-dev-server */
	devServer: {
		static: './dist',
		hot: hmr
	}
};



