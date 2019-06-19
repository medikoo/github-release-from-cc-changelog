"use strict";

const ensureString           = require("type/string/ensure")
    , { resolve }            = require("path")
    , UserError              = require("./lib/private/user-error")
    , resolveAllReleaseNotes = require("./resolve-all-release-notes");

module.exports = async (packagePath, version) => {
	packagePath = resolve(ensureString(packagePath));
	version = ensureString(version);

	const versionReleaseNotes = (await resolveAllReleaseNotes(packagePath)).get(version);

	if (!versionReleaseNotes) {
		throw new UserError(`Could not find release notes for version ${ version }`);
	}

	return versionReleaseNotes;
};
