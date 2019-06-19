"use strict";

const ensureString           = require("type/string/ensure")
    , { resolve }            = require("path")
    , UserError              = require("./lib/private/user-error")
    , resolveRepoUrl         = require("./lib/private/resolve-repo-url")
    , updateGithubRelease    = require("./lib/update-github-release")
    , resolveAllReleaseNotes = require("./resolve-all-release-notes");

module.exports = async (packagePath, version) => {
	packagePath = resolve(ensureString(packagePath));
	version = ensureString(version);

	const repoUrl = resolveRepoUrl(packagePath);

	const versionReleaseNotes = (await resolveAllReleaseNotes(packagePath)).get(version);

	if (!versionReleaseNotes) {
		throw new UserError(`Could not find release notes for version ${ version }`);
	}

	return updateGithubRelease(repoUrl, version, versionReleaseNotes);
};
