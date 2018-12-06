/**
 * Component FormStep
 */

import React from 'react';
import classnames from 'classnames';
import { Form } from '..';
import './FormStep.scss';

export interface Props {
	className?: string;
	children?: React.ReactNode;
	id: string;
	onSubmit: (form: React.FormEvent<HTMLFormElement>) => void;
}

export const FormStep = (props: Props): JSX.Element => {
	const { id, children, className, onSubmit } = props;

	return (
		<Form
			id={id}
			className={classnames('form-step', className)}
			onSubmit={form => onSubmit && onSubmit(form)}
		>
			{children}
		</Form>
	);
};
