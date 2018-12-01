/**
 * Component InputGroupText
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './InputGroupText.scss';

export interface Props {
	id: string;
	name: string;
	value: string;
	label?: string;
	type?: 'text' | 'email';
	info?: string;
	status?: 'success' | 'danger';
	onChange?: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface State {}

export class InputGroupText extends React.Component<Props, State> {
	public static defaultProps: Partial<Props> = {
		type: 'text',
	};

	constructor(props: Props) {
		super(props);
	}

	render(): JSX.Element {
		const { id, value, onChange, label, type, name, status, info } = this.props;
		const cssClass = classnames(
			`input-group input-group--${type}`,
			status && `input-group--${status}`
		);

		return (
			<div id={id} className={cssClass}>
				{label && (
					<label className="input-group__label" htmlFor={name}>
						{label}
					</label>
				)}
				{info && <small className="input-group__info">{info}</small>}
				<input
					className="input-group__input input-text"
					id={name}
					name={name}
					type={type}
					onChange={event => onChange && onChange(name, event)}
					value={value}
				/>
			</div>
		);
	}
}
