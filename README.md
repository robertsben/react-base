# react-base
## Description
A bare bones "Hello, world!" react app, to be used as a base repo for quick and easy setup of proper ES2017 react apps.

This includes a simple webpack/babel transpiling pipeline with hot loading for dev, and a dockerised express server for prod.


## Usage
1. To use in a new project, first create your repo, then:
```
git remote add base https://github.com/robertsben/react-base.git
```
2. Run `npm init` and overwrite the applicable parts of `package.json`
3. Customise your skeleton html in `public/index.html`
4. Start writing your app code in `src/index.jsx`


## Setup
Install the requirements
```
$ npm install
```

For development, including hot-loading:
```
$ npm run dev
```

For production, including bundle minifying:
```
$ npm run build
$ npm run start:prod
```

For production using docker:
```
$ docker build -t {your-app-name} .
$ docker run -p 3000:3000 -d {your-app-name}
```

## FAQ
To update from base:
```
git pull base master
```
