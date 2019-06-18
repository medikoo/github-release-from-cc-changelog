"use strict";

const Octokit   = require("@octokit/rest")
    , UserError = require("./user-error");

const githubToken = process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN;

if (!githubToken) {
	throw new UserError("Ensure GitHub token at CONVENTIONAL_GITHUB_RELEASER_TOKEN env var");
}

module.exports = new Octokit({ auth: `token ${ githubToken }` });
