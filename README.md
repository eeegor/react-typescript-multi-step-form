# Multi-step form with React & Typescript

This is an example of a multi-step form implemented with React and Typescript

## Usage

```typescript

import { FormMultiStep, FormMultiStepSchema } from './components';

// Each step currently supports one field, you can create any amount of steps 
// you want. The last step should be a `type: submit` in order to show the 
// summary and confirmation when the user reached the end of the form. 

// Please take a look at the `Interfaces` and `Type` files for further 
// documentation on available fields and options.

const formMultiStepSchema: FormMultiStepSchema = {
	1: {
		type: 'text',
		id: 'unique-id-of-the-name-control',
		name: 'name',
		label: 'Your full name',
	},
	2: {
		type: 'email',
		id: 'unique-id-of-the-email-control',
		name: 'email',
		label: 'Your email address',
	},
	3: {
		type: 'radio',
		id: 'unique-id-of-the-radio-select-control',
		name: 'salary',
		label: 'Your salary',
		defaultChecked: false,
		value: '€1.000 - €2.000',
		values: [
			'€0 - €1.000',
			'€1.000 - €2.000',
			'€2.000 - €3.000',
			'€3.000 - €4.000',
			'More than €4.000',
		],
	},
	4: {
		type: 'submit',
		id: 'unique-id-of-the-submit-control',
		name: 'submit',
		label: 'Is this data correct?',
		value: 'Confirm your details',
	},
};

// If you wish to provide default data to the form:
const formMultiStepDefaultData = {
	name: 'Bob Walters',
	email: 'bob@example.com',
	salary: 'More than €4.000',
};

// Initializing a multi-step form with formData
<FormMultiStep
	id="any-id-you-want"
	formSchema={formMultiStepSchema}
	formData={formMultiStepDefaultData}
	onChange={formData => this.handleFormChange(formData.form)}
/>
```


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

# watch
yarn test --watch

# run tests that match a spec-name (e.g `App` or `components/Form`)
yarn test name-of-spec

# update snapshots that are out of date
yarn test --updateSnapshot
```

> A full list of `jest` cli commands can be found [here](https://jestjs.io/docs/en/cli)

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
