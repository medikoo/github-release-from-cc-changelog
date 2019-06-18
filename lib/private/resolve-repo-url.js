"use strict";

const { resolve } = require("path")
    , UserError   = require(".//user-error");

module.exports = packagePath => {
	const packageJson = (() => {
		try {
			return require(resolve(packagePath, "package.json"));
		} catch (error) {
			throw new UserError(`Could not load package.json at ${ packagePath }`);
		}
	})();
	const repoUrl =
		typeof packageJson.repository === "string"
			? packageJson.repository
			: packageJson.repository && packageJson.repository.url;

	if (repoUrl) return repoUrl;

	throw new UserError(
		`Could not resolve github repo url out of package.json at ${ packagePath }`
	);
};
