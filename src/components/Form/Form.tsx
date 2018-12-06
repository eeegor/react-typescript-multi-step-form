/**
 * Component Form
 */

import React from 'react';
import classnames from 'classnames';
import './Form.scss';

export interface Props {
	id: string;
	className?: string;
	children?: React.ReactNode;
	onSubmit?: (form: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = (props: Props): JSX.Element => {
	const { id, children, className, onSubmit } = props;
	const cssClass = 'form';
	const cssClasses = classnames(cssClass, className);
	const cssClassesContainer = classnames(`${cssClass}__container`);

	return (
		<form
			id={id}
			className={cssClasses}
			onSubmit={form => onSubmit && onSubmit(form)}
			noValidate={true}
		>
			<div className={cssClassesContainer}>{children}</div>
		</form>
	);
};
