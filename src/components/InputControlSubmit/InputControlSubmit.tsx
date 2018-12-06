/**
 * Component InputControlSubmit
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { FormSummary, InputControl, Button, Label, Info } from '..';
import './InputControlSubmit.scss';

export interface Props {
	id: string;
	name: string;
	label?: string;
	value?: string;
	info?: string;
	type?: 'submit';
	status?: 'success' | 'danger';
	required?: boolean;
	className?: string;
	formValues?: object;
	errors?: string;
	onClick?: () => void;
	gotoStep?: (step: number) => void;
}

export class InputControlSubmit extends React.Component<Props> {
	render(): JSX.Element {
		const {
			id,
			className,
			required,
			onClick,
			label,
			type,
			name,
			status,
			info,
			value,
			formValues,
			gotoStep,
			errors,
		} = this.props;

		const publicFormFields = Object.assign({}, formValues);
		delete publicFormFields['submit'];

		return (
			<InputControl
				id={id}
				type={'submit'}
				status={status}
				className={classnames(className)}
				errors={errors}
			>
				<Label className="input-control__label" htmlFor={id} label={label} />
				<Info className="input-control__info" label={info} />
				{errors && <Info className="input-control__errors" label={errors} />}
				{publicFormFields && (
					<FormSummary
						gotoStep={step => gotoStep && gotoStep(step)}
						formFields={publicFormFields}
					/>
				)}

				<Button
					className={`input-control-submit__submit`}
					size="large"
					type="success"
					onClick={() => onClick && onClick()}
				>
					{value || 'Submit'}
				</Button>
			</InputControl>
		);
	}
}
