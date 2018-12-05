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
		id: 'name',
		name: 'name',
		label: 'Your full name',
		value: '',
	},
	2: {
		type: 'email',
		id: 'email',
		name: 'email',
		label: 'Your email address',
	},
	3: {
		type: 'text',
		id: 'phone',
		name: 'phone',
		label: 'Your phone number',
	},
	4: {
		type: 'radio',
		id: 'salary',
		name: 'salary',
		label: 'Your salary',
		defaultChecked: false,
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
		id: 'submit',
		name: 'submit',
		label: 'Is this data correct?',
		value: 'Confirm your details',
	},
};

const formMultiStepDefaultData = {
	name: 'Bob Walters',
	email: 'bob@example.com',
	phone: '+199278782',
	salary: 'More than €4.000',
};

interface FormSchema {
	name: string;
	email: string;
	phone: string;
	salary: string;
}

interface Props {}
interface State {
	form: FormSchema;
}

export class App extends React.Component<Props, State> {
	handleFormChange = (form: FormSchema) => this.setState({ form });

	render(): JSX.Element {
		return (
			<div className="app">
				<div className="container">
					<FormMultiStep
						id="subscribe"
						formSchema={formMultiStepSchema}
						// formData={formMultiStepDefaultData}
						onChange={formData => this.handleFormChange(formData.form as FormSchema)}
					/>
				</div>
			</div>
		);
	}
}
