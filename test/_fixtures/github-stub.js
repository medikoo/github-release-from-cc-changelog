"use strict";

const sandbox = require("sinon");

const createReleaseSpy = sandbox.stub().returns(Promise.resolve({}));
const updateReleaseSpy = sandbox.stub().returns(Promise.resolve({}));

const ghResponses = {
	getReleaseByTagName: {
		success: require("./github-rest/get-release-by-tag"),
		error: require("./github-rest/get-release-by-tag.error")
	},
	listTags: { success: require("./github-rest/list-tags") }
};

/* eslint-disable require-await */
module.exports = {
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
	"@global": true,
	"_responses": ghResponses
};
/* eslint-enable */
