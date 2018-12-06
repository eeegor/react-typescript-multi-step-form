/**
 * Component InputControlText
 */

import React from 'react';
import classnames from 'classnames';
import { InputControl, Label, Info } from '..';
import './InputControlText.scss';

export interface Props {
	id: string;
	name: string;
	value?: string;
	label?: string;
	info?: string;
	type?: 'text' | 'email';
	status?: 'success' | 'danger';
	className?: string;
	required?: boolean;
	errors?: string;
	valid?: boolean;
	onChange?: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputControlText = (props: Props): JSX.Element => {
	const {
		id,
		className,
		required,
		value,
		onChange,
		label,
		type,
		name,
		status,
		info,
		errors,
		valid,
	} = props;

	return (
		<InputControl
			id={id}
			type={type}
			status={status}
			className={classnames(className)}
			errors={errors}
			valid={valid}
		>
			<Label className="input-control__label" htmlFor={id || name} label={label} />
			<Info className="input-control__info" label={info} />
			{errors && <Info className="input-control__errors" label={errors} />}
			<input
				className={`input-control__input input-${type || 'text'}`}
				id={name}
				name={name}
				type={type}
				onChange={event => onChange && onChange(name, event)}
				value={value || ''}
				autoFocus={true}
				required={required}
				{...{ noValidate: true }}
			/>
		</InputControl>
	);
};
