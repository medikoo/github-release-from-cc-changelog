# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.7.3](https://github.com/medikoo/npm-cross-link/compare/v7.7.2...v7.7.3) (2019-05-31)

### Bug Fixes

- ensure to reread package.json after pull ([238cb5d](https://github.com/medikoo/npm-cross-link/commit/238cb5d))
- recover from missing pkg.name ([7016c53](https://github.com/medikoo/npm-cross-link/commit/7016c53))

## [7.7.2](https://github.com/medikoo/npm-cross-link/compare/v7.7.1...v7.7.2) (2019-05-16)

### Bug Fixes

- Fix repo status detection ([9a97f37](https://github.com/medikoo/npm-cross-link/commit/9a97f37))

## [7.7.1](https://github.com/medikoo/npm-cross-link/compare/v7.7.0...v7.7.1) (2019-04-09)

# [7.7.0](https://github.com/medikoo/npm-cross-link/compare/v7.6.2...v7.7.0) (2019-04-09)

### Features

- allow change of dependencies section ([62f044d](https://github.com/medikoo/npm-cross-link/commit/62f044d))

## [7.6.2](https://github.com/medikoo/npm-cross-link/compare/v7.6.1...v7.6.2) (2019-04-02)

### Bug Fixes

- do not bump outside of local version ([a5049dc](https://github.com/medikoo/npm-cross-link/commit/a5049dc))
- ensure to target latest published on latest ([8bfb6c1](https://github.com/medikoo/npm-cross-link/commit/8bfb6c1))

## [7.6.1](https://github.com/medikoo/npm-cross-link/compare/v7.6.0...v7.6.1) (2019-04-02)

### Bug Fixes

- do not bump version range to not published ([d741e62](https://github.com/medikoo/npm-cross-link/commit/d741e62))

# [7.6.0](https://github.com/medikoo/npm-cross-link/compare/v7.5.1...v7.6.0) (2019-03-26)

### Bug Fixes

- do not pursue link on name mismatch ([776dea4](https://github.com/medikoo/npm-cross-link/commit/776dea4))
- ensure proper installation ([5095b49](https://github.com/medikoo/npm-cross-link/commit/5095b49))
- fix error handling for non published packages ([ff9a5ca](https://github.com/medikoo/npm-cross-link/commit/ff9a5ca))

### Features

- ensure cleanup on name mismatch ([61543a8](https://github.com/medikoo/npm-cross-link/commit/61543a8))

## [7.5.1](https://github.com/medikoo/npm-cross-link/compare/v7.5.0...v7.5.1) (2019-03-25)

### Bug Fixes

- ensure to retrieve fresh package.json ([739f390](https://github.com/medikoo/npm-cross-link/commit/739f390))

# [7.5.0](https://github.com/medikoo/npm-cross-link/compare/v7.4.0...v7.5.0) (2019-03-22)

### Features

- validate wrong naming in package.json ([37d669e](https://github.com/medikoo/npm-cross-link/commit/37d669e))

# [7.4.0](https://github.com/medikoo/npm-cross-link/compare/v7.3.1...v7.4.0) (2019-03-22)

### Features

- publicize getPackageJson util ([1519a06](https://github.com/medikoo/npm-cross-link/commit/1519a06))

## [7.3.1](https://github.com/medikoo/npm-cross-link/compare/v7.3.0...v7.3.1) (2019-03-20)

### Bug Fixes

- ensure proper generation of new deps section ([b1091d1](https://github.com/medikoo/npm-cross-link/commit/b1091d1))

# [7.3.0](https://github.com/medikoo/npm-cross-link/compare/v7.2.0...v7.3.0) (2019-03-13)

### Features

- intelligent new version range resolution ([de9c213](https://github.com/medikoo/npm-cross-link/commit/de9c213))
- support automatic update for ~ version range ([265a6b9](https://github.com/medikoo/npm-cross-link/commit/265a6b9))

# [7.2.0](https://github.com/medikoo/npm-cross-link/compare/v7.1.0...v7.2.0) (2019-03-06)

### Bug Fixes

- unify log messages ([961116a](https://github.com/medikoo/npm-cross-link/commit/961116a))

### Features

- support target in githubRepo notation ([d0ab097](https://github.com/medikoo/npm-cross-link/commit/d0ab097))

# [7.1.0](https://github.com/medikoo/npm-cross-link/compare/v7.0.2...v7.1.0) (2019-03-06)

### Features

- recognize "latest" version range ([e080cc2](https://github.com/medikoo/npm-cross-link/commit/e080cc2))

## [7.0.2](https://github.com/medikoo/npm-cross-link/compare/v7.0.1...v7.0.2) (2019-03-06)

### Bug Fixes

- fix package.json whitespace detection ([b4c9f4d](https://github.com/medikoo/npm-cross-link/commit/b4c9f4d))

## [7.0.1](https://github.com/medikoo/npm-cross-link/compare/v7.0.0...v7.0.1) (2019-03-05)

### Bug Fixes

- bring back general install option ([557abde](https://github.com/medikoo/npm-cross-link/commit/557abde))

# [7.0.0](https://github.com/medikoo/npm-cross-link/compare/v6.2.0...v7.0.0) (2019-03-05)

### Bug Fixes

- do not crash for non existing remotes ([a47a216](https://github.com/medikoo/npm-cross-link/commit/a47a216))

### Code Refactoring

- pave path for installDependencies feature ([1d3a7db](https://github.com/medikoo/npm-cross-link/commit/1d3a7db))
- rename module ([78ec6ad](https://github.com/medikoo/npm-cross-link/commit/78ec6ad))

### Features

- improve log message ([8f26854](https://github.com/medikoo/npm-cross-link/commit/8f26854))
- improve logging ([936ee4e](https://github.com/medikoo/npm-cross-link/commit/936ee4e))
- support install of multiple dependencies ([75ae8ef](https://github.com/medikoo/npm-cross-link/commit/75ae8ef))
- support multiple global install ([e1b1284](https://github.com/medikoo/npm-cross-link/commit/e1b1284))

### BREAKING CHANGES

- install-maintaned-package.js was removed in favor of
  install-packages-globally.js
- install-package-globally.js got replaced by install-packages-globally.js
- install-dependency.js was replaced with install-dependencies.js

# [6.2.0](https://github.com/medikoo/npm-cross-link/compare/v6.1.0...v6.2.0) (2019-03-01)

### Features

- improve log message ([83734f1](https://github.com/medikoo/npm-cross-link/commit/83734f1))
- improve updateable version detection ([1a62756](https://github.com/medikoo/npm-cross-link/commit/1a62756))

# [6.1.0](https://github.com/medikoo/npm-cross-link/compare/v6.0.0...v6.1.0) (2019-02-28)

### Bug Fixes

- avoid EMFILE and ENFILE errors ([e0932bd](https://github.com/medikoo/npm-cross-link/commit/e0932bd))
- handling of broken package.json ([cdbce55](https://github.com/medikoo/npm-cross-link/commit/cdbce55))

### Features

- improve error message ([85f3fb6](https://github.com/medikoo/npm-cross-link/commit/85f3fb6))
- support username/reponame github repo notation ([6bc7f95](https://github.com/medikoo/npm-cross-link/commit/6bc7f95))

# [6.0.0](https://github.com/medikoo/npm-cross-link/compare/v5.1.0...v6.0.0) (2019-02-28)

### Bug Fixes

- do not proceed if `package.json` not found ([4b6db15](https://github.com/medikoo/npm-cross-link/commit/4b6db15))
- do not rewrite package.json on global install ([b29fca5](https://github.com/medikoo/npm-cross-link/commit/b29fca5))
- error propagation ([2faa83c](https://github.com/medikoo/npm-cross-link/commit/2faa83c))
- typo ([8484bd1](https://github.com/medikoo/npm-cross-link/commit/8484bd1))

### Features

- basic cache mechanism ([95cfc53](https://github.com/medikoo/npm-cross-link/commit/95cfc53))
- cache on spot installations ([0e74531](https://github.com/medikoo/npm-cross-link/commit/0e74531))
- cache only npm publications ([9317d63](https://github.com/medikoo/npm-cross-link/commit/9317d63))
- do not crash if package.json doesn't exist ([f7aa5dc](https://github.com/medikoo/npm-cross-link/commit/f7aa5dc))
- ensure to resolve correct versions from maintained deps ([733a3fe](https://github.com/medikoo/npm-cross-link/commit/733a3fe))
- handle git repo references efficiently ([29c7894](https://github.com/medikoo/npm-cross-link/commit/29c7894))
- handle non overridable externals properly ([f234351](https://github.com/medikoo/npm-cross-link/commit/f234351))
- if non semver range, always install in place ([1f6422e](https://github.com/medikoo/npm-cross-link/commit/1f6422e))
- improve CLI message ([24a6028](https://github.com/medikoo/npm-cross-link/commit/24a6028))
- improve error message ([f2f6608](https://github.com/medikoo/npm-cross-link/commit/f2f6608))
- improve external setup ([7b29664](https://github.com/medikoo/npm-cross-link/commit/7b29664))
- improve jobs logging ([1fe3566](https://github.com/medikoo/npm-cross-link/commit/1fe3566))
- improve log location ([5ea150a](https://github.com/medikoo/npm-cross-link/commit/5ea150a))
- improve logging ([3d986f0](https://github.com/medikoo/npm-cross-link/commit/3d986f0))
- improve logging ([528aa54](https://github.com/medikoo/npm-cross-link/commit/528aa54))
- improve package name validation ([ef7cb78](https://github.com/medikoo/npm-cross-link/commit/ef7cb78))
- install on spot for misversioned local ([2f4a827](https://github.com/medikoo/npm-cross-link/commit/2f4a827))
- on npm-cross-link <pkgName> install pkgNam as dep ([c720ec0](https://github.com/medikoo/npm-cross-link/commit/c720ec0))
- optimize further installation ([9fad7d7](https://github.com/medikoo/npm-cross-link/commit/9fad7d7))
- output log only when it makes sense ([289830c](https://github.com/medikoo/npm-cross-link/commit/289830c))
- proper location for new package.json section ([eea4e92](https://github.com/medikoo/npm-cross-link/commit/eea4e92))
- rely on etag caching ([82193f9](https://github.com/medikoo/npm-cross-link/commit/82193f9))
- speedup npm registry meta resolution ([f37b4e7](https://github.com/medikoo/npm-cross-link/commit/f37b4e7))
- support 'global' option ([d2368ae](https://github.com/medikoo/npm-cross-link/commit/d2368ae))
- support global installs of externals ([3be98f4](https://github.com/medikoo/npm-cross-link/commit/3be98f4))
- support saveMode option ([44a57ff](https://github.com/medikoo/npm-cross-link/commit/44a57ff))
- support specifying version in install-dependency ([f04aac2](https://github.com/medikoo/npm-cross-link/commit/f04aac2))
- update package.json dependencies sections ([6d90b83](https://github.com/medikoo/npm-cross-link/commit/6d90b83))
- write updated version in case of updateDependency ([3a67921](https://github.com/medikoo/npm-cross-link/commit/3a67921))

### BREAKING CHANGES

- Changed behavior of:
  \$ npm-cross-link <package-name>
  It now installs mentioned package as a dependency and does not ensure
  it's installed gobally
- If local installation exposes no version, while there's
  published version that matches version range
  install on spot
- Non semver referenced local installs are now installed
  on spot instead of being linked

# [5.1.0](https://github.com/medikoo/npm-cross-link/compare/v5.0.2...v5.1.0) (2019-02-19)

### Bug Fixes

- install of not published dependencies ([c8a379e](https://github.com/medikoo/npm-cross-link/commit/c8a379e))
- resolve correct registry url ([e8df91c](https://github.com/medikoo/npm-cross-link/commit/e8df91c))

### Features

- expose topPackageName on progressData ([ab2c468](https://github.com/medikoo/npm-cross-link/commit/ab2c468))
- improve error logging ([e6e1a21](https://github.com/medikoo/npm-cross-link/commit/e6e1a21))
- improve log levels choice ([7407bf4](https://github.com/medikoo/npm-cross-link/commit/7407bf4))
- improve log message ([8b2d935](https://github.com/medikoo/npm-cross-link/commit/8b2d935))
- improve log message ([f4c61da](https://github.com/medikoo/npm-cross-link/commit/f4c61da))
- improve log message ([a62b877](https://github.com/medikoo/npm-cross-link/commit/a62b877))
- log npm view output ([806ea63](https://github.com/medikoo/npm-cross-link/commit/806ea63))
- support npm registry authentication ([cbc9560](https://github.com/medikoo/npm-cross-link/commit/cbc9560))

<a name="5.0.2"></a>

## [5.0.2](https://github.com/medikoo/npm-cross-link/compare/v5.0.1...v5.0.2) (2019-02-04)

### Bug Fixes

- ensure to remove unexpected named dependencies ([7e4ef7b](https://github.com/medikoo/npm-cross-link/commit/7e4ef7b))
- improve external consistency detection ([b01dcac](https://github.com/medikoo/npm-cross-link/commit/b01dcac))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/medikoo/npm-cross-link/compare/v5.0.0...v5.0.1) (2019-02-04)

### Bug Fixes

- remove accidental concurrency ([d062d9a](https://github.com/medikoo/npm-cross-link/commit/d062d9a))

<a name="5.0.0"></a>

# [1.4.0](https://github.com/medikoo/npm-cross-link/compare/v4.0.0...v5.0.0) (2019-01-31)

### Bug Fixes

- fix resolution of latest supported published version ([5123814](https://github.com/medikoo/npm-cross-link/commit/5123814))
- handling installation of externals at non semver versions ([d9f0f14](https://github.com/medikoo/npm-cross-link/commit/d9f0f14))
- handling of case where package has no dependencies ([6539fa4](https://github.com/medikoo/npm-cross-link/commit/6539fa4))

### Features

- ensure to remove package-lock.json for maintained packages ([dee49dd](https://github.com/medikoo/npm-cross-link/commit/dee49dd))

### BREAKING CHANGES

- package-lock.json is now automatically removed for link dependencies.
  As they serve as libraries, so package lock servse no purpose for them
