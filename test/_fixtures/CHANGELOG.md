# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.4.0](https://github.com/medikoo/npm-cross-link/compare/v5.0.0...v5.0.1) (2019-02-04)

### Bug Fixes

- remove accidental concurrency ([d062d9a](https://github.com/medikoo/npm-cross-link/commit/d062d9a))

<a name="5.0.0"></a>

# 0.1.3 (2019-01-31)

### Bug Fixes

- fix resolution of latest supported published version ([5123814](https://github.com/medikoo/npm-cross-link/commit/5123814))
- handling installation of externals at non semver versions ([d9f0f14](https://github.com/medikoo/npm-cross-link/commit/d9f0f14))
- handling of case where package has no dependencies ([6539fa4](https://github.com/medikoo/npm-cross-link/commit/6539fa4))

### Features

- ensure to remove package-lock.json for maintained packages ([dee49dd](https://github.com/medikoo/npm-cross-link/commit/dee49dd))

### BREAKING CHANGES

- package-lock.json is now automatically removed for link dependencies.
  As they serve as libraries, so package lock servse no purpose for them
