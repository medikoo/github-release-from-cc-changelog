"use strict";

const { resolve }         = require("path")
    , { assert }          = require("chai")
    , resolveReleaseNotes = require("../../lib/resolve-release-notes-from-changelog");

const testChangelogPath = resolve(__dirname, "./_fixtures/CHANGELOG.md");

describe("lib/resolve-release-notes", () => {
	let resolvedReleases;

	before(async () => { resolvedReleases = await resolveReleaseNotes(testChangelogPath); });

	it("Should resolve all releases", () =>
		assert.deepEqual(
			[
				"7.7.3", "7.7.2", "7.7.1", "7.7.0", "7.6.2", "7.6.1", "7.6.0", "7.5.1", "7.5.0",
				"7.4.0", "7.3.1", "7.3.0", "7.2.0", "7.1.0", "7.0.2", "7.0.1", "7.0.0", "6.2.0",
				"6.1.0", "6.0.0", "5.1.0", "5.0.2", "5.0.1", "5.0.0"
			],
			Array.from(resolvedReleases.keys())
		)
	);

	it("Should resolve comparison url", () =>
		assert.equal(
			resolvedReleases.get("7.7.1").comparisonUrl,
			"https://github.com/medikoo/npm-cross-link/compare/v7.7.0...v7.7.1"
		)
	);

	it("Should resolve date string", () =>
		assert.equal(resolvedReleases.get("7.7.0").dateString, "2019-04-09")
	);

	it("Should resolve rich notes", () =>
		assert.equal(
			resolvedReleases.get("7.6.0").notes,
			[
				"### Bug Fixes", "",
				"- do not pursue link on name mismatch ([776dea4](https://github.com/medikoo/npm-cross-link/commit/776dea4))",
				"- ensure proper installation ([5095b49](https://github.com/medikoo/npm-cross-link/commit/5095b49))",
				"- fix error handling for non published packages ([ff9a5ca](https://github.com/medikoo/npm-cross-link/commit/ff9a5ca))",
				"", "### Features", "",
				"- ensure cleanup on name mismatch ([61543a8](https://github.com/medikoo/npm-cross-link/commit/61543a8))",
				""
			].join("\n")
		)
	);

	it("Should resolve no notes", () => assert.equal(resolvedReleases.get("7.7.1").notes, null));
});
