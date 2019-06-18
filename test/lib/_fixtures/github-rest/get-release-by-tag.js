"use strict";

module.exports = {
	status: 200,
	url: "https://api.github.com/repos/medikoo/gh-release-from-cc-changelog/releases/tags/v1.4.0",
	headers: {
		"access-control-allow-origin": "*",
		"access-control-expose-headers":
			"ETag, Link, Location, Retry-After, X-GitHub-OTP, " +
			"X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, " +
			"X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, " +
			"X-GitHub-Media-Type",
		"cache-control": "private, max-age=60, s-maxage=60",
		"connection": "close",
		"content-encoding": "gzip",
		"content-security-policy": "default-src 'none'",
		"content-type": "application/json; charset=utf-8",
		"date": "Tue, 18 Jun 2019 08:39:04 GMT",
		"etag": "W/\"dfbe4c0e6d2d48f90754e2f0644763f2\"",
		"last-modified": "Tue, 18 Jun 2019 08:37:13 GMT",
		"referrer-policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
		"server": "GitHub.com",
		"status": "200 OK",
		"strict-transport-security": "max-age=31536000; includeSubdomains; preload",
		"transfer-encoding": "chunked",
		"vary": "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding",
		"x-accepted-oauth-scopes": "repo",
		"x-content-type-options": "nosniff",
		"x-frame-options": "deny",
		"x-github-media-type": "github.v3; format=json",
		"x-github-request-id": "E666:1132A:A016F2:C8A2D9:5D08A328",
		"x-oauth-scopes": "repo",
		"x-ratelimit-limit": "5000",
		"x-ratelimit-remaining": "4053",
		"x-ratelimit-reset": "1560849770",
		"x-xss-protection": "1; mode=block"
	},
	data: {
		url: "https://api.github.com/repos/medikoo/gh-release-from-cc-changelog/releases/18056378",
		assets_url:
			"https://api.github.com/repos/medikoo/gh-release-from-cc-changelog/releases/18056378/assets",
		upload_url:
			"https://uploads.github.com/repos/medikoo/gh-release-from-cc-changelog/releases/18056378/assets{?name,label}",
		html_url: "https://github.com/medikoo/gh-release-from-cc-changelog/releases/tag/v1.4.0",
		id: 18056378,
		node_id: "MDc6UmVsZWFzZTE4MDU2Mzc4",
		tag_name: "v1.4.0",
		target_commitish: "15502a5c1de1e0986cfc4b53e9b6940d3a36b775",
		name: "1.4.0 (2019-03-04)",
		draft: false,
		author: {
			login: "medikoo",
			id: 122434,
			node_id: "MDQ6VXNlcjEyMjQzNA==",
			avatar_url: "https://avatars3.githubusercontent.com/u/122434?v=4",
			gravatar_id: "",
			url: "https://api.github.com/users/medikoo",
			html_url: "https://github.com/medikoo",
			followers_url: "https://api.github.com/users/medikoo/followers",
			following_url: "https://api.github.com/users/medikoo/following{/other_user}",
			gists_url: "https://api.github.com/users/medikoo/gists{/gist_id}",
			starred_url: "https://api.github.com/users/medikoo/starred{/owner}{/repo}",
			subscriptions_url: "https://api.github.com/users/medikoo/subscriptions",
			organizations_url: "https://api.github.com/users/medikoo/orgs",
			repos_url: "https://api.github.com/users/medikoo/repos",
			events_url: "https://api.github.com/users/medikoo/events{/privacy}",
			received_events_url: "https://api.github.com/users/medikoo/received_events",
			type: "User",
			site_admin: false
		},
		prerelease: false,
		created_at: "2019-06-17T15:35:36Z",
		published_at: "2019-06-18T08:37:13Z",
		assets: [],
		tarball_url:
			"https://api.github.com/repos/medikoo/gh-release-from-cc-changelog/tarball/v1.4.0",
		zipball_url:
			"https://api.github.com/repos/medikoo/gh-release-from-cc-changelog/zipball/v1.4.0",
		body:
			"### Bug Fixes\n\n- do not pursue link on name mismatch " +
			"([776dea4](https://github.com/medikoo/npm-cross-link/commit/776dea4))\n- " +
			"ensure proper installation " +
			"([5095b49](https://github.com/medikoo/npm-cross-link/commit/5095b49))\n- " +
			"fix error handling for non published packages " +
			"([ff9a5ca](https://github.com/medikoo/npm-cross-link/commit/ff9a5ca))\n\n" +
			"### Features\n\n- ensure cleanup on name mismatch " +
			"([61543a8](https://github.com/medikoo/npm-cross-link/commit/61543a8))\n\n" +
			"---\n[Comparison since last " +
			"release](https://github.com/medikoo/npm-cross-link/compare/v7.7.0...v7.7.1)"
	}
};
