"use strict";

const coerceString     = require("type/string/coerce")
    , resolveException = require("type/lib/resolve-exception");

const isUrl = RegExp.prototype.test.bind(/^http(?:s):/u);

module.exports = url => {
	const coerced = coerceString(url);
	if (coerced && isUrl(coerced)) return coerced;
	return resolveException(url, "%v is not a valid compare url", { isOptional: true });
};
