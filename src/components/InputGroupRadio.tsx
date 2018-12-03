/**
 * Component InputGroupRadio
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { InputGroup } from './InputGroup';
import { Label } from './Label';
import { Info } from './Info';
import './InputGroupRadio.scss';

export interface InputGroupRadioProps {
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

export class InputGroupRadio extends React.Component<InputGroupRadioProps> {
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
			<InputGroup id={id} type={'radio'} className={classnames(className)}>
				<input
					className="input-group__input input-radio"
					id={id}
					required={required}
					name={name}
					type="radio"
					onChange={event => onChange && onChange(name, event)}
					value={value || ''}
					defaultChecked={defaultChecked || false}
					autoFocus={defaultChecked || autoFocus || false}
				/>
				<Label className="input-group__label" htmlFor={id || name} label={label} />
				<Info className="input-group__info" label={info} />
			</InputGroup>
		);
	}
}
