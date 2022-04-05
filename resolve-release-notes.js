"use strict";

const ensureString           = require("type/string/ensure")
    , { resolve }            = require("path")
    , UserError              = require("./lib/private/user-error")
    , resolveAllReleaseNotes = require("./resolve-all-release-notes");

module.exports = async (packagePath, versionInput) => {
	packagePath = resolve(ensureString(packagePath));
	versionInput = ensureString(versionInput);

	const version = versionInput.includes("@")
		? versionInput.slice(versionInput.lastIndexOf("@") + 1)
		: versionInput;

	const versionReleaseNotes = (await resolveAllReleaseNotes(packagePath)).get(version);

	if (!versionReleaseNotes) {
		throw new UserError(`Could not find release notes for version ${ versionInput }`);
	}

	return versionReleaseNotes;
};
