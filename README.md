# react-base
## Description
A bare bones counter react app, to be used as a base repo for quick and easy setup of JS@latest (ES2017 at time of writing) react apps.

This includes a simple webpack/babel transpiling pipeline with hot loading for dev (inc. react HMR), and a dockerised express server for prod.


## Usage
1. To use in a new project, create and clone your repo (ensuring `git remote origin master` is setup and you are tracking it), then:
```
git remote add base https://github.com/robertsben/react-base.git
git pull base master
```
2. Run `npm init` and overwrite the applicable parts of `package.json` 
    * _(note: `npm init` will pull the description from this `readme` into `package.json`)_
3. Customise your skeleton html in `public/index.html`
4. Start writing your app code in `src/index.jsx`
5. Don't forget to overwrite this `readme`!


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
