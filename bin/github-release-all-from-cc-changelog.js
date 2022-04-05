#!/usr/bin/env node

"use strict";

require("essentials");

const meta = require("../package");

const argv = require("minimist")(process.argv.slice(2), {
	boolean: ["help", "version"],
	string: ["tag-prefix"],
	alias: { help: "h", version: "v" }
});

const usage = `github-release-all-from-cc-changelog v${ meta.version }

Usage: github-release-all-from-cc-changelog [-h | --help]

Resolve from CHANGELOG.md all release notes and puublish them to GitHub

Options:

    --help,   -h  Show this message
`;

if (argv.help) {
	process.stdout.write(usage);
	return;
}

if (argv.version) {
	process.stdout.write(`${ meta.version }\n`);
	return;
}

require("../lib/private/cli/all")({ tagPrefix: argv["tag-prefix"] || "" });
