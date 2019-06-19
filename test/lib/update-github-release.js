"use strict";

const { assert }          = require("chai")
    , githubStub          = require("../_fixtures/github-stub")
    , updateGithubRelease = require("../../lib/update-github-release");

const createReleaseSpy = githubStub.repos.createRelease;
const updateReleaseSpy = githubStub.repos.updateRelease;

describe("lib/update-github-release", () => {
	it("Should reject untagged version", async () => {
		try {
			await updateGithubRelease("medikoo/gh-release-from-cc-changelog", "0.0.1", {
				comparisonUrl: "https://github.com/medikoo/npm-cross-link/compare/v7.7.1...v7.7.2",
				dateString: "2019-05-16"
			});
		} catch (error) {
			if (error.code === "MISSING_TAG") return;
			throw error;
		}
		assert.fail("Unexpected success response");
	});

	it("Should create a new release if it's not created for an existing tag", async () => {
		await updateGithubRelease("medikoo/gh-release-from-cc-changelog", "0.1.3", {
			comparisonUrl: "https://github.com/medikoo/npm-cross-link/compare/v7.7.1...v7.7.2",
			dateString: "2019-05-16"
		});
		assert.ok(createReleaseSpy.calledOnce);
		assert.equal(createReleaseSpy.args[0][0].tag_name, "v0.1.3");
	});

	it("Should update existing release", async () => {
		await updateGithubRelease("medikoo/gh-release-from-cc-changelog", "1.4.0", {
			comparisonUrl: "https://github.com/medikoo/npm-cross-link/compare/v7.7.1...v7.7.2",
			dateString: "2019-05-16"
		});
		assert.ok(updateReleaseSpy.calledOnce);
		assert.equal(
			updateReleaseSpy.args[0][0].release_id,
			githubStub._responses.getReleaseByTagName.success.data.id
		);
	});
});
