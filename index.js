"use strict";

const ensureString        = require("type/string/ensure")
    , { resolve }         = require("path")
    , resolveRepoUrl      = require("./lib/private/resolve-repo-url")
    , updateGithubRelease = require("./lib/update-github-release")
    , resolveReleaseNotes = require("./resolve-release-notes");

module.exports = async (packagePath, version) => {
	packagePath = resolve(ensureString(packagePath));
	version = ensureString(version);

	const repoUrl = resolveRepoUrl(packagePath);

	return updateGithubRelease(repoUrl, version, await resolveReleaseNotes(packagePath, version));
};
