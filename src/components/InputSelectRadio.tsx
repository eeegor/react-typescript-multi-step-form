/**
 * Component InputSelectRadio
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { InputGroupRadio } from './InputGroupRadio';
import './InputSelectRadio.scss';

export interface Props {
	id: string;
	name: string;
	label: string;
	value?: string;
	values: string[];
	type?: string;
	info?: string;
	status?: 'success' | 'danger';
	defaultChecked?: string;
	onChange?: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface State {}

export class InputSelectRadio extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render(): JSX.Element {
		const { id, onChange, label, name, defaultChecked, info, status, values } = this.props;
		const cssClass = classnames(
			`input-select input-select-radio`,
			status && `input-select--${status}`
		);

		return (
			<div className={cssClass}>
				<label className="label" htmlFor="salary">
					{label}
				</label>
				{info && <small className="input-select__info">{info}</small>}
				{values.map((item: string, index: number) => (
					<InputGroupRadio
						key={index}
						name={name}
						label={item}
						value={item}
						id={`${id}-${index}`}
						defaultChecked={defaultChecked === item}
						onChange={(radio, event) => onChange && onChange(radio, event)}
					/>
				))}
			</div>
		);
	}
}
