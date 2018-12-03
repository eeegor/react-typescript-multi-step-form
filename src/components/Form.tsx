/**
 * Component Form
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './Form.scss';

export interface Props {
	id: string;
	className?: string;
	children?: React.ReactNode;
	onSubmit?: (form: React.FormEvent<HTMLFormElement>) => void;
}

export class Form extends React.Component<Props> {
	render(): JSX.Element {
		const { id, children, className, onSubmit } = this.props;
		const cssClass = 'form';
		const cssClasses = classnames(cssClass, className);
		const cssClassesContainer = classnames(`${cssClass}__container`);

		return (
			<form id={id} className={cssClasses} onSubmit={form => onSubmit && onSubmit(form)}>
				<div className={cssClassesContainer}>{children}</div>
			</form>
		);
	}
}
