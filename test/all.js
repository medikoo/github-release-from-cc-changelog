"use strict";

Error.stackTraceLimit = Infinity;

const { resolve }             = require("path")
    , { assert }              = require("chai")
    , githubStub              = require("./_fixtures/github-stub")
    , releaseAllFromChangelog = require("../all");

const createReleaseSpy = githubStub.repos.createRelease
    , updateReleaseSpy = githubStub.repos.updateRelease
    , testPackagePath = resolve(__dirname, "_fixtures");

describe("all", () => {
	it("Should update existing release", async () => {
		createReleaseSpy.reset();
		updateReleaseSpy.reset();

		await releaseAllFromChangelog(testPackagePath);
		assert.ok(createReleaseSpy.calledOnce);
		assert.ok(updateReleaseSpy.calledOnce);
		assert.equal(
			updateReleaseSpy.args[0][0].release_id,
			githubStub._responses.getReleaseByTagName.success.data.id
		);
	});
});
