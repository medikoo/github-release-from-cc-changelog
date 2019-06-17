"use strict";

const { resolve }          = require("path")
    , { createReadStream } = require("fs")
    , ensureString         = require("type/string/ensure")
    , toPromise            = require("stream-promise/to-promise")
    , split                = require("split2")
    , versionRegExpString  = require("./private/version-reg-exp-string");

const releaseStartRe = new RegExp(
	`^#+ \\[(${ versionRegExpString })\\]\\(([^)]+)\\) \\((\\d{4}-\\d{2}-\\d{2})\\)`, "u"
);

module.exports = changeLogPath => {
	changeLogPath = resolve(ensureString(changeLogPath));

	const readStream = createReadStream(changeLogPath, { encoding: "utf8" });

	const releases = new Map();
	let currentReleaseNotesLines = null;
	readStream.pipe(split()).on("data", line => {
		const matches = line.match(releaseStartRe);
		if (matches) {
			const [, version, comparisionUrl, dateString] = matches;
			if (releases.has(version)) {
				throw new Error(`Unexpected duplicate changelog for ${ version }`);
			}
			currentReleaseNotesLines = [];
			releases.set(version, {
				comparisionUrl,
				dateString,
				notesLines: currentReleaseNotesLines
			});
			return;
		}
		if (currentReleaseNotesLines) currentReleaseNotesLines.push(line);
	});
	return toPromise(readStream, { noCollect: true }).then(() => {
		for (const [, releaseMeta] of releases) {
			releaseMeta.notes =
				releaseMeta.notesLines
					.filter(line => !line.startsWith("<a name"))
					.join("\n")
					.trim() || null;
			if (releaseMeta.notes) releaseMeta.notes += "\n";
			delete releaseMeta.notesLines;
		}
		return releases;
	});
};
