#!/usr/bin/env node

"use strict";

require("essentials");

const meta = require("../package");

const argv = require("minimist")(process.argv.slice(2), {
	boolean: ["help", "version"],
	alias: { help: "h", version: "v" }
});

const [version] = argv._;

const usage = `github-release-from-cc-changelog v${ meta.version }

Usage: github-release-from-cc-changelog [-h | --help] <packageVersion>

Resolve from CHANGELOG.md and publish release notes for given version to GitHub
(note: version tag should already be pushed to GitHub)

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

if (!version) {
	process.stdout.write(usage);
	return;
}

require("../lib/private/cli")(version);
