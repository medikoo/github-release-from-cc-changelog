"use strict";

Error.stackTraceLimit = Infinity;

const { resolve }                 = require("path")
    , { assert }                  = require("chai")
    , githubStub                  = require("./_fixtures/github-stub")
    , releaseVersionFromChangelog = require("../");

const updateReleaseSpy = githubStub.repos.updateRelease
    , testPackagePath = resolve(__dirname, "_fixtures");

describe("(main)", () => {
	it("Should update existing release", async () => {
		updateReleaseSpy.reset();

		await releaseVersionFromChangelog(testPackagePath, "1.4.0");
		assert.ok(updateReleaseSpy.calledOnce);
		assert.equal(
			updateReleaseSpy.args[0][0].release_id,
			githubStub._responses.getReleaseByTagName.success.data.id
		);
	});
});
