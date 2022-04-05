"use strict";

const chalk                   = require("chalk")
    , cliFooter               = require("cli-progress-footer")()
    , releaseAllFromChangelog = require("../../../all")
    , UserError               = require("../user-error");

module.exports = async options => {
	const processDeferred = releaseAllFromChangelog(process.cwd(), options);
	cliFooter.shouldAddProgressAnimationPrefix = true;
	const inProgress = new Set();

	const updateProgress = () => cliFooter.updateProgress(Array.from(inProgress));
	processDeferred.on("start", version => {
		inProgress.add(version);
		updateProgress();
	});
	processDeferred.on("end", version => {
		inProgress.delete(version);
		updateProgress();
	});
	try {
		await processDeferred;
	} catch (error) {
		if (error instanceof UserError) {
			process.stdout.write(`${ chalk.red(error.message) }\n`);
			process.exit(1);
		}
		throw error;
	} finally {
		cliFooter.updateProgress([]);
	}
};
