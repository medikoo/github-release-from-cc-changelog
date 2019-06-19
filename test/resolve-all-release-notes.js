"use strict";

const { resolve }            = require("path")
    , { assert }             = require("chai")
    , resolveAllReleaseNotes = require("../resolve-all-release-notes");

const testPackagePath = resolve(__dirname, "_fixtures");

describe("resolve-all-release-notes", () => {
	let resolvedReleases;

	before(async () => { resolvedReleases = await resolveAllReleaseNotes(testPackagePath); });

	it("Should resolve all releases", () =>
		assert.deepEqual(["1.4.0", "0.1.3"], Array.from(resolvedReleases.keys()))
	);
});
