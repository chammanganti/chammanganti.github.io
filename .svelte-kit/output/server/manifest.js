export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BiaVirYN.js",app:"_app/immutable/entry/app.MtsTE8Vn.js",imports:["_app/immutable/entry/start.BiaVirYN.js","_app/immutable/chunks/aCsm85My.js","_app/immutable/chunks/B9O94zB9.js","_app/immutable/chunks/Q87_UqZt.js","_app/immutable/chunks/lq-r_5va.js","_app/immutable/entry/app.MtsTE8Vn.js","_app/immutable/chunks/B9O94zB9.js","_app/immutable/chunks/aCsm85My.js","_app/immutable/chunks/Q87_UqZt.js","_app/immutable/chunks/lq-r_5va.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
