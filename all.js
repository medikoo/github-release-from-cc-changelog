"use strict";

const ensureString           = require("type/string/ensure")
    , ee                     = require("event-emitter")
    , { resolve }            = require("path")
    , UserError              = require("./lib/private/user-error")
    , resolveRepoUrl         = require("./lib/private/resolve-repo-url")
    , updateGithubRelease    = require("./lib/update-github-release")
    , resolveAllReleaseNotes = require("./resolve-all-release-notes");

module.exports = function (packagePath) {
	const promise = ee(
		new Promise(resolvePromise =>
			resolvePromise(
				(async () => {
					packagePath = resolve(ensureString(packagePath));
					const repoUrl = resolveRepoUrl(packagePath);

					const errored = new Map();
					await Promise.all(
						Array.from(await resolveAllReleaseNotes(packagePath)).map(
							async ([version, versionReleaseNotes]) => {
								promise.emit("start", version);
								try {
									await updateGithubRelease(
										repoUrl, version, versionReleaseNotes
									).catch(error => {
										if (!(error instanceof UserError)) throw error;
										errored.set(version, error);
									});
								} finally {
									promise.emit("end", version);
								}
							}
						)
					);

					if (!errored.size) return;

					throw new UserError(
						`Could not update releasess for some versions:\n- ${
							Array.from(errored).map(
								([version, error]) => `${ version }: ${ error.message }`
							)
						}`
					);
				})()
			)
		)
	);
	return promise;
};
