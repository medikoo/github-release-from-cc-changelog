"use strict";

const ensureString        = require("type/string/ensure")
    , { resolve }         = require("path")
    , UserError           = require("./lib/private/user-error")
    , resolveRepoUrl      = require("./lib/private/resolve-repo-url")
    , resolveReleaseNotes = require("./lib/resolve-release-notes-from-changelog")
    , updateGithubRelease = require("./lib/update-github-release");

module.exports = async (packagePath, version) => {
	packagePath = resolve(ensureString(packagePath));
	version = ensureString(version);

	const repoUrl = resolveRepoUrl(packagePath);

	const versionReleaseNotes = (await resolveReleaseNotes(
		resolve(packagePath, "CHANGELOG.md")
	)).get(version);

	if (!versionReleaseNotes) {
		throw new UserError(`Could not find release notes for version ${ version }`);
	}

	return updateGithubRelease(repoUrl, version, versionReleaseNotes);
};
