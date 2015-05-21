# es6talk

Code examples from Patrick Hund's talk about ECMAScript 6.

## Installation

The ES6 code examples can be transpiled to JavaSript 5.1 code to run in today's browsers. 

We use [Babel](https://babeljs.io/) for this, which is integrated in a [webpack](http://webpack.github.io/) build system.

You need to have Node.js and npm installed.

To install all required npm packages and transpile the ES6 to "old school" JavaScript:

    npm install
    
You can then open up one of the example HTML files in your browser:

* [Example 1 &mdash; Modules and Classes](01_modules_classes/index.html)
* [Example 2 &mdash; Arrow Functions and Spread Operators](02_arrow_spread/index.html)
* [Example 3 &mdash; Promises](03_promises/index.html)

If you want to fiddle around with the ES6 code in the examples, you can run a webpack dev server that automatically
updates the page with this command:

    npm start
    
You can then go to [localhost:8080](http://localhost:8080/) in your browser and navigate to one of the examples, or 
call them directly with one of these links:

* [Example 1 &mdash; Modules and Classes](http://localhost:8080/01_modules_classes/)
* [Example 2 &mdash; Arrow Functions and Spread Operators](http://localhost:8080/02_arrow_spread/)
* [Example 3 &mdash; Promises](http://localhost:8080/03_promises/)

