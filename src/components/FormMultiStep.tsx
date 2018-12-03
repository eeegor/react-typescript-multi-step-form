/**
 * Component FormMultiStep
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { FormStep } from './FormStep';
import { InputGroupText } from './InputGroupText';
import { InputGroupSelectRadio } from './InputGroupSelectRadio';
import { InputGroupTextProps } from './InputGroupText';
import { InputGroupSelectRadioProps } from './InputGroupSelectRadio';
import { InputGroupSubmitProps, InputGroupSubmit } from './InputGroupSubmit';
import { FormControls } from './FormControls';
import { FormSuccess } from './FormSuccess';
import { Button } from './Button';
import './FormMultiStep.scss';

export type FormMultiStepAllowedTypes =
	| InputGroupTextProps
	| InputGroupSelectRadioProps
	| InputGroupSubmitProps;

export type FormMultiStepSchema = {
	[key: number]: FormMultiStepAllowedTypes;
};

export interface FormMultiStepProps {
	id: string;
	className?: string;
	formSchema: object;
	formData?: object;
	onChange: (state: State) => void;
}

interface State {
	currentStep: number;
	submit: boolean;
	form: object;
}

const initializeForm = (formSchema: object, formData?: object) =>
	prepareFormData(formData) || makeDefaultFormData(formSchema) || {};

const initialState = (formSchema: object, formData?: object): State => {
	return {
		currentStep: 1,
		submit: false,
		form: initializeForm(formSchema, formData),
	};
};

const makeDefaultFormData = (formSchema: object): object => {
	let nextFormData = {};
	Object.values(formSchema).map(field => {
		switch (field.type) {
			case 'submit':
				return (nextFormData[field.name] = false);
			case 'radio':
			case 'text':
			case 'email':
			default:
				return (nextFormData[field.name] = '');
		}
	});
	return nextFormData;
};

const prepareFormData = (formData?: object): object | undefined => {
	if (formData && !formData.hasOwnProperty('submit')) {
		return { ...formData, submit: false };
	}
	return formData || undefined;
};

export class FormMultiStep extends React.Component<FormMultiStepProps, State> {
	state: State = initialState(this.props.formSchema, this.props.formData);

	gotoPrevStep = (): void => {
		this.setState(state => ({
			...state,
			submit: false,
			currentStep: state.currentStep > 1 ? state.currentStep - 1 : 1,
		}));
	};

	gotoNextStep = (): void => {
		const maxSteps = Object.keys(this.state.form).length;
		this.setState(state => ({
			...state,
			submit: false,
			currentStep: state.currentStep < maxSteps ? state.currentStep + 1 : maxSteps,
		}));
	};

	handleFormSubmit = (form: React.FormEvent<HTMLFormElement>): void => {
		form.preventDefault();
		this.gotoNextStep();
		this.props.onChange(this.state);
	};

	handleInputChange = (name: string, value: string): void => {
		this.setState(
			state => ({
				...state,
				form: {
					...state.form,
					[name]: value,
				},
			}),
			() => this.props.onChange(this.state)
		);
	};

	handleFormComplete = (): void => {
		this.setState(state => ({
			...state,
			submit: true,
		}));
		this.props.onChange(this.state);
	};

	resetForm = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		this.setState(initialState(this.props.formSchema, this.props.formData), () =>
			this.props.onChange(this.state)
		);
	};

	render(): JSX.Element {
		const { id, className, formSchema } = this.props;
		const { form, currentStep, submit } = this.state;
		const formStepData = formSchema[currentStep];
		const maxSteps = Object.keys(form).length;

		return (
			<div id={`form-multi-step-${id}`} className={classnames('form-multi-step', className)}>
				<FormControls
					maxSteps={maxSteps}
					currentStep={currentStep}
					onBack={() => this.gotoPrevStep()}
				/>
				{submit && <FormSuccess onReset={event => this.resetForm(event)} />}
				{!submit && (
					<FormStep
						key={currentStep}
						id={`form-step-${currentStep}`}
						onSubmit={formData => this.handleFormSubmit(formData)}
					>
						{formStepData.type === 'radio' && (
							<InputGroupSelectRadio
								id={formStepData.id}
								required={formStepData.required}
								name={formStepData.name}
								label={formStepData.label}
								values={formStepData.values}
								info={formStepData.info}
								status={formStepData.status}
								defaultChecked={
									(formStepData.values.includes(form[formStepData.name]) &&
										form[formStepData.name]) ||
									formStepData.values[0]
								}
								onChange={(name, event) =>
									this.handleInputChange(name, event.target.value)
								}
							/>
						)}
						{(formStepData.type === 'text' || formStepData.type === 'email') && (
							<InputGroupText
								id={formStepData.id}
								required={formStepData.required}
								name={formStepData.name}
								label={formStepData.label}
								type={formStepData.type}
								value={form[formStepData.name]}
								info={formStepData.info}
								status={formStepData.status}
								onChange={(name, event) =>
									this.handleInputChange(name, event.target.value)
								}
							/>
						)}
						{formStepData.type === 'submit' && (
							<InputGroupSubmit
								id={formStepData.id}
								required={formStepData.required}
								name={formStepData.name}
								label={formStepData.label}
								value={formStepData.value}
								info={formStepData.info}
								status={formStepData.status}
								formValues={form}
								onClick={() => this.handleFormComplete()}
							/>
						)}
						{formStepData.type !== 'submit' && (
							<Button
								size="large"
								className="form-multi-step__next"
								type={(currentStep === maxSteps && 'disabled') || 'secondary'}
								onClick={() => this.gotoNextStep()}
							>
								Next
							</Button>
						)}
					</FormStep>
				)}
			</div>
		);
	}
}
