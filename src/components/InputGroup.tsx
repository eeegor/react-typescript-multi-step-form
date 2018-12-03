/**
 * Component InputGroup
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './InputGroup.scss';

export interface InputGroupProps {
	id: string;
	className?: string;
	required?: boolean;
	type?: 'text' | 'email' | 'radio' | 'select-radio' | 'submit';
	status?: 'success' | 'danger';
}

export class InputGroup extends React.Component<InputGroupProps> {
	render(): JSX.Element {
		const { id, className, children, required, type, status } = this.props;
		const cssClass = classnames(
			`input-group input-group-${type || 'text'}`,
			status && `input-group--${status}`,
			required && `input-group--${required}`,
			className
		);

		return (
			<div id={`input-group-${id}`} className={cssClass}>
				{children}
			</div>
		);
	}
}
