import typescript from "@aviene/eslint-config-node";
import optional from "@aviene/eslint-config-node/optional";
import style from "@aviene/eslint-config-node/style";
import jsdoc from "@aviene/esling-config-base/jsdoc";

const globs = {
	js: "**/*.{js,mjs}",
	ts: "**/*.{ts,mts}",
};

/** @type {Array<import("eslint").Linter.Config>} */
const config = [
	{ ignores: ["**/dist/"] },
	{ files: [globs.js, globs.ts], ...typescript },
	{ files: [globs.js, globs.ts], ...optional },
	{ files: [globs.js, globs.ts], ...style },
	{ files: [globs.js, globs.ts], languageOptions: { ecmaVersion: 2022 } },
	{ files: [globs.js, globs.ts], ...jsdoc }
];

export default config;
