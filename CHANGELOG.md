# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.3.0](https://github.com/medikoo/gh-release-from-cc-changelog/compare/v2.2.1...v2.3.0) (2022-04-05)

### Features

- Support multi-package repository tags ([09df03b](https://github.com/medikoo/gh-release-from-cc-changelog/commit/09df03bc3cd33bfcb8c5fdd6788eb9daf89c96d2))

### [2.2.1](https://github.com/medikoo/gh-release-from-cc-changelog/compare/v2.2.0...v2.2.1) (2022-01-28)

### Maintenance Improvements

- Do not return value in executor function ([b7a2837](https://github.com/medikoo/gh-release-from-cc-changelog/commit/b7a283752d1721de3a220a0de380ece606032638))
- Upgrade `@octokit/rest` to v17 ([ca34873](https://github.com/medikoo/gh-release-from-cc-changelog/commit/ca348736bac5df44945148f729ae88d7f6529e9f))
- Upgrade `@octokit/rest` to v18 ([89ecabd](https://github.com/medikoo/gh-release-from-cc-changelog/commit/89ecabda4c1351053ed931576aa5001a65086b92))
- Upgrade `chalk` to v3 ([5055654](https://github.com/medikoo/gh-release-from-cc-changelog/commit/5055654f3134a6c10504e4ff173e6149716c2ef6))
- Upgrade `type` to v2 ([f590985](https://github.com/medikoo/gh-release-from-cc-changelog/commit/f59098579cc87f1755c529bc4087a7ae1f3341e5))

## [2.2.0](https://github.com/medikoo/gh-release-from-cc-changelog/compare/v2.1.0...v2.2.0) (2019-06-20)

### Features

- Support 'v' prefixed version input in CLI ([a3b3e08](https://github.com/medikoo/gh-release-from-cc-changelog/commit/a3b3e08))

## [2.1.0](https://github.com/medikoo/gh-release-from-cc-changelog/compare/v2.0.0...v2.1.0) (2019-06-20)

### Features

- Support pass of GitHub token with GITHUB_TOKEN or GH_TOKEN env var ([d85888e](https://github.com/medikoo/gh-release-from-cc-changelog/commit/d85888e))

### Tests

- Ensure to override env as copy ([8604b2c](https://github.com/medikoo/gh-release-from-cc-changelog/commit/8604b2c))

## [2.0.0](https://github.com/medikoo/gh-release-from-cc-changelog/compare/v1.0.1...v2.0.0) (2019-06-19)

### Features

- dump-release-notes-from-cc-changelog CLI ([464fa89](https://github.com/medikoo/gh-release-from-cc-changelog/commit/464fa89))
- resolveAllReleaseNotes util ([6af9dc1](https://github.com/medikoo/gh-release-from-cc-changelog/commit/6af9dc1))
- resolveReleaseNotes util ([9f8210e](https://github.com/medikoo/gh-release-from-cc-changelog/commit/9f8210e))

### refactor

- Rename lib/resolve-release-notes ([a3fdb94](https://github.com/medikoo/gh-release-from-cc-changelog/commit/a3fdb94))

### Tests

- Cover 'all' program ([7fa20e8](https://github.com/medikoo/gh-release-from-cc-changelog/commit/7fa20e8))
- Cover main program ([f0a21da](https://github.com/medikoo/gh-release-from-cc-changelog/commit/f0a21da))
- Ensure proper repo resolution ([351b5ee](https://github.com/medikoo/gh-release-from-cc-changelog/commit/351b5ee))
- Move fixtures to tests root ([6f1f934](https://github.com/medikoo/gh-release-from-cc-changelog/commit/6f1f934))
- replace proxyquire with manual cache override ([bb09095](https://github.com/medikoo/gh-release-from-cc-changelog/commit/bb09095))
- Seclude github API mock ([e78cc17](https://github.com/medikoo/gh-release-from-cc-changelog/commit/e78cc17))
- Seclude simple CHANGELOG case ([628932c](https://github.com/medikoo/gh-release-from-cc-changelog/commit/628932c))

### BREAKING CHANGES

- lib/resolve-release-notes was renamed to lib/resolve-release-notes-from-changelog

### [1.0.1](https://github.com/medikoo/gh-release-from-cc-changelog/compare/v1.0.0...v1.0.1) (2019-06-18)

### Bug Fixes

- Fix resolution of first version ([e0cf28b](https://github.com/medikoo/gh-release-from-cc-changelog/commit/e0cf28b))

## 1.0.0 (2019-06-18)

### Features

- github-release-all-from-cc-changelog CLI ([5a30e42](https://github.com/medikoo/gh-release-from-cc-changelog/commit/5a30e42))
- github-release-from-cc-changelog CLI ([852b0a3](https://github.com/medikoo/gh-release-from-cc-changelog/commit/852b0a3))
- Main resolveFromChangelog program ([d58d774](https://github.com/medikoo/gh-release-from-cc-changelog/commit/d58d774))
- releaseAll program ([e82e21d](https://github.com/medikoo/gh-release-from-cc-changelog/commit/e82e21d))
- resolveReleaseNotes util ([b562d3b](https://github.com/medikoo/gh-release-from-cc-changelog/commit/b562d3b))
- updateGithubRelease util ([0230c46](https://github.com/medikoo/gh-release-from-cc-changelog/commit/0230c46))
