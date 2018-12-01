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
	id: string;
	// tslint:disable-next-line:no-any
	formSchema: { [key: number]: any };
	onChange: (form: FormSchema) => void;
}

interface State {
	showDebugState: boolean;
	currentStep: number;
	submit: boolean;
	form: FormSchema;
}

const DebugState = (props: { state: State; showDebugState: boolean; onClick: () => void }) => (
	<div className="debug-state">
		<div className="debug-state__toggle" onClick={() => props.onClick()}>
			Show state
		</div>
		{props.showDebugState && (
			<div className="debug-state__body">
				<h3>State</h3>
				{Object.keys(props.state).map(stateItem => (
					<div className="flex" key={stateItem}>
						<label>{stateItem}</label>
						<div>
							<pre>
								<code>{JSON.stringify(props.state[stateItem], null, 4)}</code>
							</pre>
						</div>
					</div>
				))}
			</div>
		)}
	</div>
);

export class FormMultiStep extends React.Component<Props, State> {
	state = {
		showDebugState: false,
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

	toggleDebugState = () =>
		this.setState(state => ({ ...state, showDebugState: !state.showDebugState }));

	render(): JSX.Element {
		const { id, formSchema } = this.props;
		const { form, currentStep, showDebugState } = this.state;

		return (
			<div id={`form-multi-step--${id}`} className="form-multi-step">
				<div className="container">
					<h1>Multi Step Form</h1>
					<p>
						Current step:{' '}
						<span>
							{currentStep} / {Object.keys(form).length}
						</span>
					</p>

					<DebugState
						state={this.state}
						showDebugState={showDebugState}
						onClick={() => this.toggleDebugState()}
					/>

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
										values={formStepData.values}
										defaultChecked={
											(formStepData.values.includes(
												form[formStepData.name]
											) &&
												form[formStepData.name]) ||
											formStepData.values[0]
										}
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
										value={form[formStepData.name]}
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
