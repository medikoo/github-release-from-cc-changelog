"use strict";

const chalk               = require("chalk")
    , normalizeNotes      = require("../normalize-notes")
    , UserError           = require("../user-error")
    , resolveReleaseNotes = require("../../../resolve-release-notes");

module.exports = async version => {
	if (version[0] === "v") version = version.slice(1);
	const { name, body } = await (async () => {
		try {
			return normalizeNotes(version, await resolveReleaseNotes(process.cwd(), version));
		} catch (error) {
			if (error instanceof UserError) {
				process.stdout.write(`${ chalk.red(error.message) }\n`);
				process.exit(1);
			}
			throw error;
		}
	})();

	process.stdout.write(`# ${ name }\n\n${ body }`);
};
