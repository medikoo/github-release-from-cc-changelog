"use strict";

const Octokit = require("@octokit/rest");

const githubToken = process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN;

if (!githubToken) {
	throw new Error("Ensure GitHub token at CONVENTIONAL_GITHUB_RELEASER_TOKEN env var");
}

module.exports = new Octokit({ auth: `token ${ githubToken }` });
