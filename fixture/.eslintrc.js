module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:lodash/recommended"
	],
	"env": {
		"node": true
	},
	"plugins": [
		"angular",
		"lodash"
	],
	"globals": {
		"angular": false,
		"_": false
	},
	"rules": {
		"angular/component-limit": 2,
		"angular/controller-as": 2,
		"angular/no-controller": 2,
		"angular/prefer-component": 2,
		"consistent-return": 2,
		"indent": [1, 4],
		"no-else-return": 1,
		"semi": [1, "always"],
		"space-unary-ops": 2
	}
};