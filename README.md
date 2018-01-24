# ArrayHelper

A javacript program which takes source array of objects and change all the property values containing '-' to '/'.

## Assumptions
- The source array will be array of objects.
- The challenge is to transform the property values within the objects and not the names/keys.
For e.g. let var = [ { fName: 'tes-tFirst', lName: 'te--stLast' } ]. Here the intention is to transform 'tes-tFirst' and 'te--stLast' values.
- If the source array consist of elements which are primitive types like string, number, boolean, undefined and null they will not be transformed. 
- The javascript program will return the modified resultant array.
- The ES6 syntax is been widely used.
- The unit test are driven by Jasmine and nodeJS and does not require Karma test runner. This is to keep simplicity although in real world scenarios test runner like Karma are widely used.


## Tools

If you don’t already have them, install [Git](https://git-scm.com/downloads),
[NodeJS](https://nodejs.org/en/) (including npm), [jasmine](https://jasmine.github.io/index.html).

- perform an OS-appropriate Git installation
- perform an OS-appropriate NodeJS installation
- then install Jasmine: `npm install -g jasmine`
- then install all dependencies: 'npm install'

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- run `npm install` to install dependencies
- Use [JSFiddle](https://jsfiddle.net/vikas2future/f0skfzey/) to test the javascript program.Initial data setup done with result displayed in console window under developer tools.
- run `npm test` to run unit test using jasmine/nodeJS.

