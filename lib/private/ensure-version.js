"use strict";

const coerceString     = require("type/string/coerce")
    , resolveException = require("type/lib/resolve-exception")
    , regExpString     = require("./version-reg-exp-string");

const isVersion = RegExp.prototype.test.bind(new RegExp(regExpString, "u"));

module.exports = version => {
	const coerced = coerceString(version);
	if (coerced && isVersion(coerced)) return coerced;
	return resolveException(version, "%v is not a valid version");
};
