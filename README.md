# JavaScript Demo Project
Starting point for all new websites. Moving away from Wordpress for the speed benefits and flexibility. 

## What Can It Do?
Built with Node.js at it's core.

The package.json is filled with everything I'll need but isn't using it all currently.

So far it is simply serving a static index.html file at the '/' URL using Express.js

It has some security measures behind the scenes for checking NPM modules.
It runs in parralell each time npm start is called.
"npm start" or simply "nsp check"

It is also using localtunnel to showxase the work in progress easily without using a cloud service.
"npm run share"

Supports Babel transpiling so ES6 is used where possible. Using babel-node in the npm scripts.

Uses Webpack to bundle dependencies. Bundles JS and CSS + SASS etc. 
I'm using Sourcemaps to help debug the live code after transpiling and bundling.

ESLint helps catch mistakes and enforce best practices. I am using the recommended settings for simplicity. 
I use ESLint Watch to add watching capabilites to my linting process.
Added a linting script in npm scripts.
