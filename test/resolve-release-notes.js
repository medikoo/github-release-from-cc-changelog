"use strict";

const { resolve }         = require("path")
    , { assert }          = require("chai")
    , resolveReleaseNotes = require("../resolve-release-notes");

const testPackagePath = resolve(__dirname, "_fixtures");

describe("resolve-release-notes", () => {
	it("Should resolve relese notes", async () =>
		assert.deepEqual(await resolveReleaseNotes(testPackagePath, "0.1.3"), {
			comparisonUrl: null,
			dateString: "2019-01-31",
			notes:
				"### Bug Fixes\n\n- fix resolution of latest supported published version " +
				"([5123814](https://github.com/medikoo/npm-cross-link/commit/5123814))\n- " +
				"handling installation of externals at non semver versions " +
				"([d9f0f14](https://github.com/medikoo/npm-cross-link/commit/d9f0f14))\n- " +
				"handling of case where package has no dependencies " +
				"([6539fa4](https://github.com/medikoo/npm-cross-link/commit/6539fa4))\n\n" +
				"### Features\n\n- ensure to remove package-lock.json for maintained " +
				"packages " +
				"([dee49dd](https://github.com/medikoo/npm-cross-link/commit/dee49dd))\n\n" +
				"### BREAKING CHANGES\n\n- package-lock.json is now automatically removed " +
				"for link dependencies.\n  As they serve as libraries, so package lock " +
				"servse no purpose for them\n"
		}));
});
