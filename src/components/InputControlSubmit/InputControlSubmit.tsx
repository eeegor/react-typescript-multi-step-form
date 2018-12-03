/**
 * Component InputControlSubmit
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { FormSummary, InputControl, Button, Label, Info } from '..';
import './InputControlSubmit.scss';

export interface InputControlSubmitProps {
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
	onClick?: () => void;
	gotoStep?: (step: number) => void;
}

export class InputControlSubmit extends React.Component<InputControlSubmitProps> {
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
		} = this.props;

		const publicFormFields = Object.assign({}, formValues);
		delete publicFormFields['submit'];

		return (
			<InputControl id={id} type={'submit'} status={status} className={classnames(className)}>
				<Label className="input-control__label" htmlFor={id || name} label={label} />
				<Info className="input-control__info" label={info} />

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
