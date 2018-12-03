/**
 * Component InputGroupSubmit
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { FormSummary, InputGroup, Button, Label, Info } from '..';
import './InputGroupSubmit.scss';

export interface InputGroupSubmitProps {
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
}

export class InputGroupSubmit extends React.Component<InputGroupSubmitProps> {
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
		} = this.props;

		const publicFormFields = Object.assign({}, formValues);
		delete publicFormFields['submit'];

		return (
			<InputGroup id={id} type={'submit'} status={status} className={classnames(className)}>
				<Label className="input-group__label" htmlFor={id || name} label={label} />
				<Info className="input-group__info" label={info} />

				{publicFormFields && <FormSummary formFields={publicFormFields} />}

				<Button
					className={`input-group__input input-submit`}
					size="large"
					type="success"
					onClick={() => onClick && onClick()}
				>
					{value || 'Submit'}
				</Button>
			</InputGroup>
		);
	}
}
