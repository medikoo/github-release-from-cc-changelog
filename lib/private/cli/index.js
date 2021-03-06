"use strict";

const chalk                = require("chalk")
    , releaseFromChangelog = require("../../..")
    , UserError            = require("../user-error");

module.exports = async version => {
	if (version[0] === "v") version = version.slice(1);
	try {
		await releaseFromChangelog(process.cwd(), version);
	} catch (error) {
		if (error instanceof UserError) {
			process.stdout.write(`${ chalk.red(error.message) }\n`);
			process.exit(1);
		}
		throw error;
	}
};
