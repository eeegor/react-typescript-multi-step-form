/**
 * Component InputGroupSelectRadio
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { InputGroupRadio, InputGroup, Label, Info } from '..';
import './InputGroupSelectRadio.scss';

export interface InputGroupSelectRadioProps {
	id: string;
	name: string;
	label?: string;
	values: string[];
	info?: string;
	value?: string;
	status?: 'success' | 'danger';
	required?: boolean;
	className?: boolean;
	defaultChecked?: string;
	onChange?: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class InputGroupSelectRadio extends React.Component<InputGroupSelectRadioProps> {
	render(): JSX.Element {
		const {
			id,
			className,
			required,
			onChange,
			label,
			name,
			defaultChecked,
			info,
			status,
			values,
		} = this.props;

		return (
			<InputGroup
				id={id}
				type={'select-radio'}
				status={status}
				className={classnames(className)}
			>
				<Label className="input-group__label" htmlFor={id || name} label={label || ''} />
				<Info className="input-group__info" label={info || ''} />
				{values.map((item: string, index: number) => (
					<InputGroupRadio
						id={`${id}-${index}`}
						required={required}
						key={index}
						name={name}
						label={item}
						value={item || ''}
						defaultChecked={defaultChecked === item}
						onChange={(radio, event) => onChange && onChange(radio, event)}
					/>
				))}
			</InputGroup>
		);
	}
}
