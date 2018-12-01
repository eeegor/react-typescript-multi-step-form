/**
 * Component InputGroupRadio
 */

import * as React from 'react';
import './InputGroupRadio.scss';

export interface Props {
	id: string;
	name: string;
	label: string;
	value: string;
	type?: string;
	info?: string;
	defaultChecked?: boolean;
	onChange: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface State {}

export class InputGroupRadio extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render(): JSX.Element {
		const { id, value, onChange, label, name, defaultChecked, info } = this.props;

		return (
			<div className="input-group input-group--radio">
				<input
					className="input-group__input input-radio"
					id={id}
					name={name}
					type="radio"
					onChange={event => onChange(name, event)}
					value={value}
					defaultChecked={defaultChecked || false}
				/>
				<label className="input-group__label" htmlFor={id}>
					{label}
				</label>
				{info && <small className="input-group__info">{info}</small>}
			</div>
		);
	}
}
