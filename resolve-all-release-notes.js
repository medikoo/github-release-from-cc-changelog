"use strict";

const ensureString        = require("type/string/ensure")
    , { resolve }         = require("path")
    , resolveReleaseNotes = require("./lib/resolve-release-notes-from-changelog");

module.exports = packagePath =>
	resolveReleaseNotes(resolve(ensureString(packagePath), "CHANGELOG.md"));
