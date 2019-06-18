"use strict";

const { resolve }          = require("path")
    , { createReadStream } = require("fs")
    , ensureString         = require("type/string/ensure")
    , toPromise            = require("stream-promise/to-promise")
    , split                = require("split2")
    , versionRegExpString  = require("./private/version-reg-exp-string")
    , UserError            = require("./private/user-error");

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
			const [, version, comparisonUrl, dateString] = matches;
			if (releases.has(version)) {
				throw new UserError(`Unexpected duplicate changelog for ${ version }`);
			}
			currentReleaseNotesLines = [];
			releases.set(version, {
				comparisonUrl,
				dateString,
				notesLines: currentReleaseNotesLines
			});
			return;
		}
		if (currentReleaseNotesLines) currentReleaseNotesLines.push(line);
	});
	return toPromise(readStream, { noCollect: true }).then(
		() => {
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
		},
		error => {
			if (error.code === "ENOENT") {
				throw new UserError(`Could not find changelog file at '${ changeLogPath }'`);
			}
			throw error;
		}
	);
};
