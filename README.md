## Intro

## TODO 
- `Add normalizr` -  add normalizr to to make the selector cleaner (need to learn this library)
- `Add test suite` - use jest and enzyme to create test, will probably do this before polishing
- `Refactor` - the 'intro', 'body', and 'end' code are pretty similar. I should be able to clean it up
- `Fix Flow` - there are a few flow errors that I need to fix, biggest one is figuring out how to use decorator (might need to remove them)
- `Make "user" information editable` - Want to be able to change name, cell, email, etc
- `Fix pdf` - turned out the jsPDF library doesn't work that well with sass, I need to figure out a way to generate nice PDFs

## Starting the dev server

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run coverage` - generate code coverage report in the `coverage` folder


## Odd Designs Choice

I made some odd design choices because I wanted to do things differently. Some of them are:

- `Duck structure` - The React project I work on at work was a first attempt for the company, so we followed the file stucture used in some of the offical documentation. As the project got bigger, some things got more annoying. I read about the '[Ducks file structure](https://github.com/erikras/ducks-modular-redux)' and wanted to try it. I also Flow type and will be adding jest test cases to the reducers to see how that goes for maintainability

- `Inconsistency reducers` - I created the "posting" reducer first. Unlike the project at work, I was using a "duck structure" and Flow with it. I got them to work together acceptably ( but had somethings I didn't like about them).  When I made the "keyword" reducers, I wanted to try different naming scheme and things differently to see how it'll look. Afterward I'll redo all the reducer so they are the same. 



## Acknowledgments

- [react-webpack-boilerplate](https://github.com/KleoPetroff/react-webpack-boilerplate): I had the "fun" of setting up a webpack React project at work and later having to do it again when we neeeded to make it into an Electron project.  So I am really thankful for this boilerplate so I don't have to do set up again 