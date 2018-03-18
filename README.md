
## Starting the dev server

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run coverage` - generate code coverage report in the `coverage` folder


## odd designs choice

I made some odd design choices because I wanted to do things differently. Some of them are:


-duck structure: the  React project I work on at work was a first attempt, so we followed the file stucture used in some of the offical docutmation. As it got bigger, some things got more annoying. I read about the '[Ducks file structure](https://github.com/erikras/ducks-modular-redux)' and wanted to try it.



##Acknowledgments

- [react-webpack-boilerplate](https://github.com/KleoPetroff/react-webpack-boilerplate): I had the "fun" of setting up a webpack React project at work and later having to do it again when we neeeded to make it into an electron project.  So I am really thankful for this boilerplate so I don't have to do set up again 