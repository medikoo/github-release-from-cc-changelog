"use strict";

const noNotesPlaceholder = "_Maintanance improvements_\n";

module.exports = (version, releaseMeta) => {
	let notes = releaseMeta.notes || noNotesPlaceholder;
	if (releaseMeta.comparisonUrl) {
		notes += `\n---\n[Comparison since last release](${ releaseMeta.comparisonUrl })\n`;
	}

	return { name: `${ version } (${ releaseMeta.dateString })`, body: notes };
};
