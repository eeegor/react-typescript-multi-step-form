# Multi-step form with React & Typescript

This is an example of a multi-step form implemented with React and Typescript


## :rocket: Getting started

After you have cloned the repository to your computer please run the following commands inside the project folder:

```bash
# install dependencies
yarn

# run the app (localhost:8080)
yarn start
```

## :construction: Test

To make sure the application works as expected you can run the test suite like this:

```bash
# runs all test files
yarn test

# with coverage report
yarn test --coverage
```

## :rainbow: Prettier

Prettier is a code formatter that ensures that all outputted code conforms to a consistent style

Run the following command before each commit to make sure your changes are valid :nerd_face:

Formats all `Ts/Tsx`, `Js/Jsx` and `Scss` files according to `.prettierrc` presets

```bash
# format all files
yarn format
```

## :vertical_traffic_light: Linter

> 
> Code linting can be seen, in a more broad sense, as static code analysis.
> 
> [What's the difference between Lint and Prettier?](https://restishistory.net/blog/whats-the-difference-between-eslint-and-prettier.html)

Lints all `Ts/Tsx`, `Js/Jsx` and `Scss` files according to `tslint.json` presets

```bash
# lint all files
yarn lint
```

> **Note:** Before running `yarn lint`, please run `yarn format` first :wink:

## :factory: Build

If you wish to host this app, you will need to run the build command. After you've run the command, you will find the build artefacts in the `/dist` folder.

```bash
# build static files
yarn build
```
