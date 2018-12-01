/**
 * App
 */

import * as React from 'react';
import './index.scss';
import './App.scss';
import { FormMultiStep, FormSchema } from './components/FormMultiStep';
import { Props as InputGroupTextProps } from './components/InputGroupText';
import { Props as InputSelectRadioProps } from './components/InputSelectRadio';

const formMultiStepSchema: { [key: number]: InputGroupTextProps | InputSelectRadioProps } = {
	1: { type: 'text', id: 'name', name: 'name', label: 'Your full name', value: 'Demo' },
	2: {
		type: 'email',
		id: 'email',
		name: 'email',
		label: 'Your email',
		value: 'info@example.com',
	},
	3: { type: 'text', id: 'phone', name: 'phone', label: 'Your phone', value: '+49 160 3232323' },
	4: {
		type: 'select-radio',
		id: 'salary',
		name: 'salary',
		label: 'Select you salary',
		values: [
			'€ 0 - € 1.000',
			'€ 1.000 - € 2.000',
			'€ 2.000 - € 3.000',
			'€ 3.000 - € 4.000',
			'More then € 4.000',
		],
	},
};

interface Props {}
interface State {
	form: FormSchema;
}

export class App extends React.Component<Props, State> {
	handleFormChange = (form: FormSchema) => {
		this.setState(
			state => ({
				...state,
				form,
			})
		);
	};

	render(): JSX.Element {
		return (
			<div className="app">
				<div className="content">
					<div className="container">
						<FormMultiStep
							id="subscribe"
							formSchema={formMultiStepSchema}
							onChange={formData => this.handleFormChange(formData)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
