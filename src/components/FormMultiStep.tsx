/**
 * Component FormMultiStep
 */

import * as React from 'react';
import { FormStep } from './FormStep';
import { InputGroupText } from './InputGroupText';
import { InputSelectRadio } from './InputSelectRadio';
import { Props as InputGroupTextProps } from './InputGroupText';
import { Props as InputSelectRadioProps } from './InputSelectRadio';
import './FormMultiStep.scss';

export interface FormSchema {
	name: string;
	email: string;
	phone: string;
	salary: string;
}

export interface Props {
	// tslint:disable-next-line:no-any
	formSchema: { [key: number]: any };
	onChange: (form: FormSchema) => void;
}

interface State {
	currentStep: number;
	submit: boolean;
	form: FormSchema;
}

export class FormMultiStep extends React.Component<Props, State> {
	state = {
		currentStep: 1,
		submit: false,
		form: {
			name: '',
			email: '',
			phone: '',
			salary: '',
		},
	};

	handleFormSubmit = (form: React.FormEvent<HTMLFormElement>) => {
		form.preventDefault();
		this.props.onChange(this.state.form);
	};

	handleInputChange = (name: string, value: string) => {
		this.setState(state => ({
			...state,
			form: {
				...state.form,
				[name]: value,
			},
		}));
	};

	render(): JSX.Element {
		const { formSchema } = this.props;
		const { form } = this.state;

		return (
			<div className="form-multi-step">
				<div className="container">
					<h1>Multi Step Form</h1>
					<div>
						{Object.keys(form).map(item => (
							<div className="flex" key={item}>
								<label>{item}</label>
								<div>{form[item] || 'No data yet...'}</div>
							</div>
						))}
					</div>
					<hr />
					{Object.keys(formSchema).map(formSchemaStep => {
						const formStepData = formSchema[formSchemaStep];
						return (
							<FormStep
								key={formSchemaStep}
								id={`form-step-${formSchemaStep}`}
								onSubmit={formData => this.handleFormSubmit(formData)}
							>
								{formStepData.type === 'select-radio' && (
									<InputSelectRadio
										id={formStepData.id}
										name={formStepData.name}
										label={formStepData.label}
										value={formStepData.value}
										values={formStepData.values}
										defaultChecked={formStepData.values[0]}
										onChange={(name, event) =>
											this.handleInputChange(name, event.target.value)
										}
									/>
								)}
								{(formStepData.type === 'text' ||
									formStepData.type === 'email') && (
									<InputGroupText
										name={formStepData.name}
										label={formStepData.label}
										type={formStepData.type}
										value={formStepData.value}
										onChange={(name, event) =>
											this.handleInputChange(name, event.target.value)
										}
									/>
								)}
							</FormStep>
						);
					})}
				</div>
			</div>
		);
	}
}
