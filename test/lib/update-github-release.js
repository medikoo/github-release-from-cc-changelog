"use strict";

const { assert } = require("chai")
    , proxyquire = require("proxyquire")
    , sandbox    = require("sinon");

const ghResponses = {
	getReleaseByTagName: {
		success: require("../_fixtures/github-rest/get-release-by-tag"),
		error: require("../_fixtures/github-rest/get-release-by-tag.error")
	},
	listTags: { success: require("../_fixtures/github-rest/list-tags") }
};

/* eslint-disable require-await */
const createReleaseSpy = sandbox.stub().returns(Promise.resolve({}));
const updateReleaseSpy = sandbox.stub().returns(Promise.resolve({}));
const updateGithubRelease = proxyquire("../../lib/update-github-release", {
	"./private/github": {
		"repos": {
			getReleaseByTag: async ({ tag }) => {
				if (tag === "v0.0.1") throw ghResponses.getReleaseByTagName.error;
				if (tag === "v0.1.3") throw ghResponses.getReleaseByTagName.error;
				if (tag === "v1.4.0") return ghResponses.getReleaseByTagName.success;
				throw new Error(`Unrecognized tag ${ tag }`);
			},
			listTags: async () => ghResponses.listTags.success,
			createRelease: createReleaseSpy,
			updateRelease: updateReleaseSpy
		},
		"@noCallThru": true,
		"@global": true
	}
});
/* eslint-enable */

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
			updateReleaseSpy.args[0][0].release_id, ghResponses.getReleaseByTagName.success.data.id
		);
	});
});
