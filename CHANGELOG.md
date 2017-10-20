# Changelog

## 0.3.0
### Features
* Now uses `react-router`
* Now does server side rendering for the production app
* Now has a generic 404 page for routes we don't have stuff for

## 0.2.0
### Features
* Now include counter app to show state
* Add `react-hot-loader` for HMR
* `eslint` for linting
* Now using `node.js@8`, `webpack@3`

### Changed
* Lots of dev tools moved from `dependencies` to `devDependencies`
* No longer using `babel-node` in production
* Use `.jsx` for all react files
* Move node globals out to `config.js`

## 0.1.0
### Features
* Dockerised production environment
* `webpack-dev-server` local environment
* `express` routed prod server