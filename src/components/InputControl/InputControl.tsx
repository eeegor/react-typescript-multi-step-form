/**
 * Component InputControl
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './InputControl.scss';

export interface Props {
	id: string;
	className?: string;
	required?: boolean;
	valid?: boolean;
	type?: 'text' | 'email' | 'radio' | 'select-radio' | 'submit';
	status?: 'success' | 'danger';
	errors?: string;
}

export class InputControl extends React.Component<Props> {
	render(): JSX.Element {
		const { id, className, children, required, type, status, errors, valid } = this.props;
		const cssClass = classnames(
			`input-control input-control-${type || 'text'}`,
			status && `input-control--${status}`,
			required && `input-control--required`,
			errors && `input-control--danger`,
			valid && `input-control--success`,
			className
		);

		return (
			<div id={`input-control-${id}`} className={cssClass}>
				{children}
			</div>
		);
	}
}
