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

## Branches

The master of this Git repo contains just the basic skeleton with the webpack and Babel setup and HTML pages, but no
JavaScript code.

The code examples are on various branches which you can check out to see the refactoring steps from "old school" JavaScript
to ES6, which I presented at my talk:

* [before](https://github.com/pahund/es6talk/tree/before) &mdash; the JavaScript before refactoring
* [step1](https://github.com/pahund/es6talk/tree/step1) &mdash; refactoring step 1 
* [step2](https://github.com/pahund/es6talk/tree/step2) &mdash; refactoring step 2 
* [step3](https://github.com/pahund/es6talk/tree/step3) &mdash; refactoring step 3 
* [step4](https://github.com/pahund/es6talk/tree/step4) &mdash; refactoring step 4 
* [after](https://github.com/pahund/es6talk/tree/after) &mdash; the final result

## Tools Used in the Code Examples

* [webpack](http://webpack.github.io/) module bundler &mdash; Copyright (C) 2012-2015 Tobias Koppers;
  [MIT License](https://github.com/webpack/webpack/blob/master/LICENSE)
* [Babel](https://babeljs.io/) JavaScript compiler &mdash; Copyright (C) 2014-2015 Sebastian McKenzie;
  [MIT License](https://github.com/babel/babel/blob/master/LICENSE)
* [npm](https://www.npmjs.com/) package manager &mdash; Copyright (c) npm, Inc. and Contributors. All rights reserved;
  [The Artistic License 2.0](https://www.npmjs.com/policies/npm-license)
* [jQuery](http://jquery.com/) JavaScript library &mdash; Copyright jQuery Foundation and other contributors;
  [MIT License](https://github.com/jquery/jquery/blob/master/LICENSE.txt)
* [Bootstrap](http://getbootstrap.com/) HTML/CSS/JS framework &mdash; Copyright (c) 2011-2015 Twitter, Inc;
  [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE)

## Recommended Reading

Here's a short list of great resources for those who are interested in learning about ECMAScript 6:

* Nicholas C. Zachas: [Understanding ECMAScript 6](https://leanpub.com/understandinges6/)
* [Learn ES6](https://babeljs.io/docs/learn-es6/) on Babel.io
* Axel Rauschmayer's [JavaScript blog](http://www.2ality.com/)

Also, don't forget to [check out our eBay Technology Blog](http://technology.ebay.de/),
and follow me on Twitter: [@wiekatz](https://twitter.com/wiekatz/)

## License

The MIT License (MIT)

Copyright (c) 2015 mobile.de GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
