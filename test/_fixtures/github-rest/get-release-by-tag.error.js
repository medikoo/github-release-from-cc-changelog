"use strict";

module.exports = Object.assign(new Error("Not Found"), {
	name: "HttpError",
	status: 404,
	headers: {
		"access-control-allow-origin": "*",
		"access-control-expose-headers":
			"ETag, Link, Location, Retry-After, X-GitHub-OTP, " +
			"X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, " +
			"X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, " +
			"X-GitHub-Media-Type",
		"connection": "close",
		"content-encoding": "gzip",
		"content-security-policy": "default-src 'none'",
		"content-type": "application/json; charset=utf-8",
		"date": "Tue, 18 Jun 2019 08:34:50 GMT",
		"referrer-policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
		"server": "GitHub.com",
		"status": "404 Not Found",
		"strict-transport-security": "max-age=31536000; includeSubdomains; preload",
		"transfer-encoding": "chunked",
		"x-accepted-oauth-scopes": "repo",
		"x-content-type-options": "nosniff",
		"x-frame-options": "deny",
		"x-github-media-type": "github.v3; format=json",
		"x-github-request-id": "E50F:25D83:199E0E:1FBD45:5D08A22A",
		"x-oauth-scopes": "repo",
		"x-ratelimit-limit": "5000",
		"x-ratelimit-remaining": "4382",
		"x-ratelimit-reset": "1560849770",
		"x-xss-protection": "1; mode=block"
	},
	request: {
		method: "GET",
		url:
			"https://api.github.com/repos/medikoo/gh-release-from-cc-changelog/releases/tags/v0.1.5",
		headers: {
			"accept": "application/vnd.github.v3+json",
			"user-agent": "octokit.js/16.28.2 Node.js/12.4.0 (macOS Mojave; x64)",
			"authorization": "token [REDACTED]"
		},
		request: {}
	},
	documentation_url: "https://developer.github.com/v3/repos/releases/#get-a-release-by-tag-name"
});
