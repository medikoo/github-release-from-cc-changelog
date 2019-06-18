"use strict";

const coerceString     = require("type/string/coerce")
    , resolveException = require("type/lib/resolve-exception");

const isDateStrong = RegExp.prototype.test.bind(/^\d{4}-\d{2}-\d{2}$/u);

module.exports = dateString => {
	const coerced = coerceString(dateString);
	if (coerced && isDateStrong(coerced)) return coerced;
	return resolveException(dateString, "%v is not a valid date string");
};
