"use strict";

const github = require("./github");

module.exports = async (tagName, payload, page = 1) => {
	/* eslint-disable camelcase */
	const tags = (await github.repos.listTags({ ...payload, per_page: 100, page })).data;
	/* eslint-enable */
	const tag = tags.find(tagMeta => tagMeta.name === tagName);
	if (tag) return tag;
	if (tags.length === 100) return module.exports(tagName, payload, page + 1);
	return null;
};
