/**
 * Component InputGroupText
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { InputGroup, Label, Info } from '..';
import './InputGroupText.scss';

export interface InputGroupTextProps {
	id: string;
	name: string;
	value?: string;
	label?: string;
	info?: string;
	type?: 'text' | 'email';
	status?: 'success' | 'danger';
	className?: string;
	required?: boolean;
	onChange?: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class InputGroupText extends React.Component<InputGroupTextProps> {
	render(): JSX.Element {
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
		} = this.props;

		return (
			<InputGroup id={id} type={type} status={status} className={classnames(className)}>
				<Label className="input-group__label" htmlFor={id || name} label={label} />
				<Info className="input-group__info" label={info} />
				<input
					className={`input-group__input input-${type || 'text'}`}
					id={name}
					name={name}
					type={type}
					onChange={event => onChange && onChange(name, event)}
					value={value || ''}
					autoFocus={true}
					required={required}
				/>
			</InputGroup>
		);
	}
}
