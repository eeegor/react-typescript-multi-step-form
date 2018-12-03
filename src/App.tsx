/**
 * App
 */

import * as React from 'react';
import { FormMultiStep, FormMultiStepSchema } from './components';
import './index.scss';
import './App.scss';

const formMultiStepSchema: FormMultiStepSchema = {
	1: {
		type: 'text',
		required: true,
		id: 'name',
		name: 'name',
		label: 'Your full name',
		value: '',
		info: 'All data will be handled with care',
	},
	2: {
		type: 'email',
		required: true,
		id: 'email',
		name: 'email',
		label: 'Your email address',
		info: 'All data will be handled with care',
	},
	3: {
		type: 'text',
		required: true,
		id: 'phone',
		name: 'phone',
		label: 'Your phone number',
		info: 'All data will be handled with care',
	},
	4: {
		type: 'radio',
		required: true,
		id: 'salary',
		name: 'salary',
		label: 'Your salary',
		info: 'All data will be handled with care',
		values: [
			'€0 - €1.000',
			'€1.000 - €2.000',
			'€2.000 - €3.000',
			'€3.000 - €4.000',
			'More than €4.000',
		],
	},
	5: {
		type: 'submit',
		required: true,
		id: 'submit',
		name: 'submit',
		label: 'Is this data correct?',
		value: 'Confirm your details',
		info: 'All data will be handled with care',
	},
};

const formMultiStepDefaultData = {
	name: 'Bob Walters',
	email: 'bob@example.com',
	phone: '+199278782',
	salary: 'More than €4.000',
};

interface Props {}
interface State {
	form: object;
}

export class App extends React.Component<Props, State> {
	handleFormChange = (form: object) => this.setState({ form });

	render(): JSX.Element {
		return (
			<div className="app">
				<div className="container">
					<FormMultiStep
						id="subscribe"
						formSchema={formMultiStepSchema}
						// formData={formMultiStepDefaultData}
						onChange={formData => this.handleFormChange(formData.form)}
					/>
				</div>
			</div>
		);
	}
}
