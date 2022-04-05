"use strict";

const ensureObject     = require("type/object/ensure")
    , ensureString     = require("type/string/ensure")
    , parseGithubUrl   = require("parse-github-url")
    , ensureDateString = require("./private/ensure-date-string")
    , ensureUrl        = require("./private/ensure-url")
    , ensureVersion    = require("./private/ensure-version")
    , github           = require("./private/github")
    , resolveTag       = require("./private/resolve-tag")
    , normalizeNotes   = require("./private/normalize-notes")
    , UserError        = require("./private/user-error");

module.exports = async (githubUrl, version, releaseMeta) => {
	ensureString(githubUrl);
	ensureVersion(version);
	ensureObject(releaseMeta);

	ensureUrl(releaseMeta.comparisonUrl);
	ensureDateString(releaseMeta.dateString);

	const { name, body } = normalizeNotes(version, releaseMeta);

	const { name: repo, owner } = parseGithubUrl(githubUrl);

	const tagName = version.includes("@") ? version : `v${ version }`;
	const ghReleaseMeta = await (async () => {
		try {
			return (await github.repos.getReleaseByTag({ owner, repo, tag: tagName })).data;
		} catch (error) {
			if (error.status === 404) return null;
			throw error;
		}
	})();

	if (ghReleaseMeta) {
		/* eslint-disable camelcase */
		return github.repos.updateRelease({
			owner,
			repo,
			release_id: ghReleaseMeta.id,
			name,
			body
		});
		/* eslint-enable */
	}

	const tagMeta = await resolveTag(tagName, { owner, repo });

	if (!tagMeta) {
		throw Object.assign(new UserError("Could not resolve a tag for a version"), {
			code: "MISSING_TAG"
		});
	}

	/* eslint-disable camelcase */
	return github.repos.createRelease({
		owner,
		repo,
		tag_name: tagName,
		target_commitish: tagMeta.commit.sha,
		name,
		body
	});
	/* eslint-enable */
};
