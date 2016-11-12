module.exports = {
	extends: "eslint:recommended",
	plugins: [
		"angular",
		"lodash"
	],
	"env": {
		"node": true
	},
	rules: {
		"no-irregular-whitespace": 1,
		"no-regex-spaces": 1,
		"no-multi-spaces": [1, {
			"exceptions": {
				"Property": true,
				"VariableDeclarator": true,
				"AssignmentExpression": true
			}
		}],
		"block-spacing": 2,
		"computed-property-spacing": 0,
		"no-mixed-spaces-and-tabs": 2,
		"no-spaced-func": 1,
		"no-whitespace-before-property": 1,
		"no-trailing-spaces": 1,
		"quotes": [2, "single"],
		"require-jsdoc": 2,
		"space-before-blocks": 0,
		"space-before-function-paren": [1, {
			"anonymous": "always",
			"named": "never"
		}],
		"space-in-parens": 0,
		"space-infix-ops": 1,
		"space-unary-ops": [1, {
			"words": true,
			"nonwords": false
		}],
		"spaced-comment": [1, "always", {
			"exceptions": ["-", "+"],
			"markers": ["/"]
		}]
	}
};