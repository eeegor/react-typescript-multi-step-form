/**
 * Component Form
 */

import * as React from 'react';
import * as classNames from 'classnames';
import './Form.scss';

export interface Props {
	id: string;
	className?: string;
	children?: React.ReactNode;
	onSubmit?: (form: React.FormEvent<HTMLFormElement>) => void;
}

export interface State {}

export class Form extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render(): JSX.Element {
		const { id, children, className, onSubmit } = this.props;
		const cssClass = 'form';
		const cssClasses = classNames(cssClass, className);
		const cssClassesContainer = classNames(`${cssClass}__container`);

		return (
			<form id={id} className={cssClasses} onSubmit={form => onSubmit && onSubmit(form)}>
				<div className={cssClassesContainer}>{children}</div>
			</form>
		);
	}
}
