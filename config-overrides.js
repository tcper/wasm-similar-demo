const path = require('path');

module.exports = function override(config, env) {
	config.module.rules.push({
		test: /\.wasm$/,
		type: 'webassembly/async',
		  
	});
	config.experiments = {
		asyncWebAssembly: true, 
		syncWebAssembly: true
	}
	return config;
};
