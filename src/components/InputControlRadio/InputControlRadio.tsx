/**
 * Component InputControlRadio
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { InputControl, Label, Info } from '..';
import './InputControlRadio.scss';

export interface InputControlRadioProps {
	id: string;
	name: string;
	info?: string;
	value?: string;
	label?: string;
	required?: boolean;
	autoFocus?: boolean;
	className?: string;
	defaultChecked?: boolean;
	onChange?: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class InputControlRadio extends React.Component<InputControlRadioProps> {
	render(): JSX.Element {
		const {
			id,
			required,
			className,
			value,
			onChange,
			label,
			name,
			defaultChecked,
			info,
			autoFocus,
		} = this.props;

		return (
			<InputControl id={id} type={'radio'} className={classnames(className)}>
				<input
					className="input-control__input input-radio"
					id={id}
					required={required}
					name={name}
					type="radio"
					onChange={event => onChange && onChange(name, event)}
					value={value || ''}
					defaultChecked={defaultChecked || false}
					autoFocus={defaultChecked || autoFocus || false}
				/>
				<Label className="input-control__label" htmlFor={id || name} label={label} />
				<Info className="input-control__info" label={info} />
			</InputControl>
		);
	}
}
